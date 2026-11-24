/* =========================================================
   MÀN HÌNH MỞ ĐẦU: Đường hầm sao 3D + Warp xuyên không gian
   ========================================================= */
(function () {
  const intro = document.getElementById("intro");
  if (!intro) return;

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  const core = document.getElementById("introInitials");
  if (PROFILE.avatar) {
    core.textContent = "";
    core.classList.add("has-photo");
    core.style.backgroundImage = `url("${PROFILE.avatar}")`;
    if (PROFILE.avatarFocus) {
      core.style.backgroundSize = PROFILE.avatarFocus.size;
      core.style.backgroundPosition = PROFILE.avatarFocus.position;
    }
  } else core.textContent = PROFILE.initials;
  document.getElementById("introName").textContent = PROFILE.name;

  const cv = document.getElementById("introCanvas");
  const ctx = cv.getContext("2d");
  let W = 0, H = 0;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  /* ---------- Sao trong đường hầm ---------- */
  const DEPTH = 1000;
  const N = window.innerWidth < 800 ? 450 : 1000;
  const stars = [];
  function spawn(s, randomZ) {
    const a = Math.random() * Math.PI * 2;
    const r = 60 + Math.random() * 1100;
    s.x = Math.cos(a) * r;
    s.y = Math.sin(a) * r;
    s.z = randomZ ? Math.random() * DEPTH : DEPTH;
    s.pz = s.z;
    s.hue = 180 + Math.random() * 150;
    return s;
  }
  for (let i = 0; i < N; i++) stars.push(spawn({}, true));

  let speed = 2.5, targetSpeed = 2.5, swirl = 0.0015, warping = false, running = true;
  let mx = 0, my = 0, smx = 0, smy = 0;
  window.addEventListener("pointermove", (e) => {
    mx = (e.clientX / W - 0.5) * 2;
    my = (e.clientY / H - 0.5) * 2;
  });

  function draw() {
    if (!running) return;
    smx += (mx - smx) * 0.05;
    smy += (my - smy) * 0.05;
    speed += (targetSpeed - speed) * (warping ? 0.06 : 0.05);

    // Vệt mờ chuyển động
    ctx.fillStyle = warping ? "rgba(3,4,11,0.25)" : "rgba(3,4,11,0.45)";
    ctx.fillRect(0, 0, W, H);

    const cx = W / 2 - smx * 60;
    const cy = H / 2 - smy * 60;
    const fov = Math.max(W, H) * 0.45;
    const rot = swirl * (1 + speed * 0.15);
    const cr = Math.cos(rot), sr = Math.sin(rot);

    ctx.lineCap = "round";
    for (const s of stars) {
      // xoáy quanh trục Z
      const nx = s.x * cr - s.y * sr;
      s.y = s.x * sr + s.y * cr;
      s.x = nx;

      s.pz = s.z;
      s.z -= speed;
      if (s.z < 1) { spawn(s, false); continue; }

      const sx = cx + (s.x / s.z) * fov;
      const sy = cy + (s.y / s.z) * fov;
      const px = cx + (s.x / s.pz) * fov;
      const py = cy + (s.y / s.pz) * fov;
      if (sx < -50 || sx > W + 50 || sy < -50 || sy > H + 50) { spawn(s, false); continue; }

      const near = 1 - s.z / DEPTH;
      const light = warping ? 75 + near * 20 : 65;
      ctx.strokeStyle = `hsla(${s.hue},100%,${light}%,${Math.min(1, near * 1.4)})`;
      ctx.lineWidth = Math.max(0.6, near * (warping ? 3.2 : 2.4));
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(sx + 0.1, sy + 0.1);
      ctx.stroke();
    }

    // Lõi sáng ở tâm đường hầm
    const glowR = 120 + speed * 4;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
    g.addColorStop(0, `rgba(180,140,255,${Math.min(0.5, 0.12 + speed * 0.006)})`);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(cx - glowR, cy - glowR, glowR * 2, glowR * 2);

    requestAnimationFrame(draw);
  }
  ctx.fillStyle = "#03040b";
  ctx.fillRect(0, 0, W, H);
  requestAnimationFrame(draw);

  /* ---------- Thanh tải ---------- */
  const fill = document.getElementById("loaderFill");
  const text = document.getElementById("loaderText");
  const msgs = ["Đang khởi tạo vũ trụ", "Đang sắp xếp các vì sao", "Đang nạp ký ức", "Sẵn sàng cất cánh"];
  let prog = 0, ready = false;
  const loadTimer = setInterval(() => {
    prog = Math.min(100, prog + Math.random() * 9 + 3);
    fill.style.width = prog + "%";
    text.textContent = `${msgs[Math.min(3, Math.floor(prog / 26))]}... ${Math.floor(prog)}%`;
    if (prog >= 100) {
      clearInterval(loadTimer);
      setTimeout(() => { ready = true; intro.classList.add("ready"); }, 300);
    }
  }, 90);

  /* ---------- Âm thanh (tạo bằng Web Audio, không cần file) ---------- */
  let soundOn = true;
  const soundBtn = document.getElementById("soundToggle");
  soundBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    soundOn = !soundOn;
    soundBtn.textContent = soundOn ? "🔊 Âm thanh: Bật" : "🔇 Âm thanh: Tắt";
  });

  function playWarpSound() {
    if (!soundOn) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      const ac = new AC();
      const t = ac.currentTime;
      const master = ac.createGain();
      master.gain.value = 0.55;
      master.connect(ac.destination);

      // Tiếng "vút" (nhiễu trắng quét tần số)
      const dur = 2;
      const buf = ac.createBuffer(1, ac.sampleRate * dur, ac.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const noise = ac.createBufferSource();
      noise.buffer = buf;
      const bp = ac.createBiquadFilter();
      bp.type = "bandpass"; bp.Q.value = 1.4;
      bp.frequency.setValueAtTime(180, t);
      bp.frequency.exponentialRampToValueAtTime(4000, t + 1.15);
      bp.frequency.exponentialRampToValueAtTime(300, t + dur);
      const ng = ac.createGain();
      ng.gain.setValueAtTime(0.0001, t);
      ng.gain.exponentialRampToValueAtTime(0.7, t + 1.1);
      ng.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      noise.connect(bp).connect(ng).connect(master);
      noise.start(t);

      // Âm tăng dần (riser)
      const riser = ac.createOscillator();
      riser.type = "sawtooth";
      riser.frequency.setValueAtTime(90, t);
      riser.frequency.exponentialRampToValueAtTime(900, t + 1.15);
      const lp = ac.createBiquadFilter();
      lp.type = "lowpass"; lp.frequency.value = 1400;
      const rg = ac.createGain();
      rg.gain.setValueAtTime(0.0001, t);
      rg.gain.exponentialRampToValueAtTime(0.12, t + 1.0);
      rg.gain.exponentialRampToValueAtTime(0.0001, t + 1.25);
      riser.connect(lp).connect(rg).connect(master);
      riser.start(t); riser.stop(t + 1.3);

      // Tiếng "bùm" trầm khi chớp sáng
      const boom = ac.createOscillator();
      boom.type = "sine";
      boom.frequency.setValueAtTime(140, t + 1.15);
      boom.frequency.exponentialRampToValueAtTime(28, t + 2.6);
      const bg = ac.createGain();
      bg.gain.setValueAtTime(0.0001, t);
      bg.gain.setValueAtTime(0.0001, t + 1.15);
      bg.gain.exponentialRampToValueAtTime(0.9, t + 1.2);
      bg.gain.exponentialRampToValueAtTime(0.0001, t + 2.8);
      boom.connect(bg).connect(master);
      boom.start(t); boom.stop(t + 3);

      setTimeout(() => ac.close(), 3500);
    } catch (err) { /* trình duyệt không hỗ trợ âm thanh */ }
  }

  /* ---------- Vào trang ---------- */
  const btn = document.getElementById("introBtn");
  btn.addEventListener("mouseenter", () => { if (!warping) targetSpeed = 9; });
  btn.addEventListener("mouseleave", () => { if (!warping) targetSpeed = 2.5; });

  let entered = false;
  function enter() {
    if (!ready || entered) return;
    entered = true;
    warping = true;
    targetSpeed = 85;
    swirl = 0.004;
    intro.classList.add("warp");
    playWarpSound();

    setTimeout(() => intro.classList.add("flash"), 1150);
    setTimeout(() => {
      document.body.classList.remove("locked");
      document.body.classList.add("entered");
      intro.classList.add("hide");
    }, 1400);
    setTimeout(() => {
      running = false;
      window.removeEventListener("resize", resize);
      intro.remove();
    }, 2900);
  }

  btn.addEventListener("click", enter);
  window.addEventListener("keydown", function onKey(e) {
    if (e.key === "Enter" || e.key === " ") {
      if (ready && !entered) { e.preventDefault(); enter(); }
      if (entered) window.removeEventListener("keydown", onKey);
    }
  });
})();
