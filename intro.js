/* =========================================================
   MÀN HÌNH MỞ ĐẦU THIÊN NHIÊN 3D: Rừng đom đóm + Lá bay + Nắng sớm
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

  /* ---------- Hạt đom đóm & lá bay trong đường hầm khu rừng 3D ---------- */
  const DEPTH = 1000;
  const N = window.innerWidth < 800 ? 280 : 560;
  const motes = [];
  function spawnMote(m, randomZ) {
    const a = Math.random() * Math.PI * 2;
    const r = 60 + Math.random() * 1050;
    m.x = Math.cos(a) * r;
    m.y = Math.sin(a) * r;
    m.z = randomZ ? Math.random() * DEPTH : DEPTH;
    m.pz = m.z;
    m.isLeaf = Math.random() < 0.14;
    m.hue = m.isLeaf
      ? 116 + Math.random() * 42
      : (Math.random() < 0.55 ? 46 + Math.random() * 16 : 138 + Math.random() * 35);
    m.rot = Math.random() * Math.PI * 2;
    m.vrot = (Math.random() - 0.5) * 0.05;
    m.phase = Math.random() * Math.PI * 2;
    return m;
  }
  for (let i = 0; i < N; i++) motes.push(spawnMote({}, true));

  let speed = 2.0, targetSpeed = 2.0, swirl = 0.0012, warping = false, running = true;
  let warpProgress = 0;
  let mx = 0, my = 0, smx = 0, smy = 0;
  window.addEventListener("pointermove", (e) => {
    mx = (e.clientX / W - 0.5) * 2;
    my = (e.clientY / H - 0.5) * 2;
  });

  function drawSilhouette(t) {
    // Rặng núi & rừng thông mờ phía chân trời, tách xuống khi bấm vào
    const drop = warpProgress * H * 0.45;
    const base = H + drop;
    const layers = [
      { y: 0.84, amp: 34, freq: 0.0032, shift: 18, color: "rgba(7, 34, 25, 0.55)" },
      { y: 0.90, amp: 26, freq: 0.0052, shift: 40, color: "rgba(4, 22, 16, 0.78)" },
    ];
    for (const ly of layers) {
      ctx.beginPath();
      ctx.moveTo(0, base + 40);
      for (let x = 0; x <= W + 20; x += 20) {
        const y = H * ly.y + drop
          - Math.sin(x * ly.freq + 1.2) * ly.amp
          - Math.cos(x * ly.freq * 1.9 + 0.5) * (ly.amp * 0.45)
          - smy * 12;
        ctx.lineTo(x - smx * ly.shift * 0.2, y);
      }
      ctx.lineTo(W, base + 40);
      ctx.closePath();
      ctx.fillStyle = ly.color;
      ctx.fill();
    }
  }

  function draw(t) {
    if (!running) return;
    smx += (mx - smx) * 0.05;
    smy += (my - smy) * 0.05;
    speed += (targetSpeed - speed) * (warping ? 0.055 : 0.05);
    if (warping) warpProgress = Math.min(1, warpProgress + 0.018);

    // Vệt sương rừng mờ
    ctx.fillStyle = warping ? "rgba(3, 14, 10, 0.24)" : "rgba(3, 14, 10, 0.42)";
    ctx.fillRect(0, 0, W, H);

    const cx = W / 2 - smx * 55;
    const cy = H / 2 - smy * 55;
    const fov = Math.max(W, H) * 0.45;

    // Tia nắng xuyên tán lá xoay chậm ở tâm
    const rays = 7;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(t * 0.00008 + smx * 0.1);
    const rayR = Math.max(W, H) * (0.55 + warpProgress * 0.4);
    for (let i = 0; i < rays; i++) {
      const a = (i * Math.PI * 2) / rays;
      const rg = ctx.createRadialGradient(0, 0, 10, 0, 0, rayR);
      rg.addColorStop(0, `rgba(250, 240, 165, ${0.06 + warpProgress * 0.08})`);
      rg.addColorStop(0.5, `rgba(74, 222, 128, ${0.03 + warpProgress * 0.04})`);
      rg.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = rg;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, rayR, a, a + 0.26);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();

    const rot = swirl * (1 + speed * 0.12);
    const cr = Math.cos(rot), sr = Math.sin(rot);
    ctx.lineCap = "round";

    for (const m of motes) {
      const nx = m.x * cr - m.y * sr;
      m.y = m.x * sr + m.y * cr;
      m.x = nx;

      m.pz = m.z;
      m.z -= speed;
      m.rot += m.vrot;
      if (m.z < 1) { spawnMote(m, false); continue; }

      const sx = cx + (m.x / m.z) * fov;
      const sy = cy + (m.y / m.z) * fov;
      const px = cx + (m.x / m.pz) * fov;
      const py = cy + (m.y / m.pz) * fov;
      if (sx < -60 || sx > W + 60 || sy < -60 || sy > H + 60) { spawnMote(m, false); continue; }

      const near = 1 - m.z / DEPTH;
      const alpha = Math.min(1, near * 1.35);

      if (m.isLeaf && !warping) {
        // Vẽ chiếc lá nhỏ lơ lửng 3D
        const sz = Math.max(2, near * 9);
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(m.rot);
        ctx.scale(1, 0.45 + 0.55 * Math.abs(Math.cos(m.rot * 1.3)));
        ctx.beginPath();
        ctx.moveTo(0, -sz);
        ctx.quadraticCurveTo(sz * 0.7, 0, 0, sz);
        ctx.quadraticCurveTo(-sz * 0.7, 0, 0, -sz);
        ctx.fillStyle = `hsla(${m.hue}, 82%, 62%, ${alpha * 0.9})`;
        ctx.fill();
        ctx.restore();
      } else {
        // Đom đóm phát sáng (kéo vệt vàng-xanh khi lao qua cổng rừng)
        const pulse = warping ? 1 : (0.55 + 0.45 * Math.sin(t * 0.004 + m.phase));
        const light = warping ? 76 + near * 20 : 70;
        ctx.strokeStyle = `hsla(${m.hue}, 98%, ${light}%, ${alpha * pulse})`;
        ctx.lineWidth = Math.max(1, near * (warping ? 3.8 : 3.2));
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx + 0.1, sy + 0.1);
        ctx.stroke();
      }
    }

    // Quầng nắng xanh ấm ở giữa
    const glowR = 140 + speed * 4.5;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
    g.addColorStop(0, `rgba(187, 247, 208, ${Math.min(0.45, 0.12 + speed * 0.005)})`);
    g.addColorStop(0.55, `rgba(74, 222, 128, ${Math.min(0.25, 0.06 + speed * 0.003)})`);
    g.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = g;
    ctx.fillRect(cx - glowR, cy - glowR, glowR * 2, glowR * 2);

    drawSilhouette(t);
    requestAnimationFrame(draw);
  }

  ctx.fillStyle = "#030e0a";
  ctx.fillRect(0, 0, W, H);
  requestAnimationFrame(draw);

  /* ---------- Thanh tải ---------- */
  const fill = document.getElementById("loaderFill");
  const text = document.getElementById("loaderText");
  const msgs = ["Đang đánh thức khu rừng", "Đang gọi bầy đom đóm", "Đang mở lối nắng sớm", "Sẵn sàng khám phá"];
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

  /* ---------- Âm thanh thiên nhiên: Chuông gió ngũ cung + làn gió rừng ---------- */
  let soundOn = true;
  const soundBtn = document.getElementById("soundToggle");
  soundBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    soundOn = !soundOn;
    soundBtn.textContent = soundOn ? "🔊 Âm thanh: Bật" : "🔇 Âm thanh: Tắt";
  });

  function playNatureSound() {
    if (!soundOn) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      const ac = new AC();
      const t = ac.currentTime;
      const master = ac.createGain();
      master.gain.value = 0.5;
      master.connect(ac.destination);

      // 1. Tiếng gió lướt qua tán lá (nhiễu lọc mềm)
      const dur = 2.6;
      const buf = ac.createBuffer(1, ac.sampleRate * dur, ac.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const wind = ac.createBufferSource();
      wind.buffer = buf;
      const bp = ac.createBiquadFilter();
      bp.type = "bandpass"; bp.Q.value = 1.8;
      bp.frequency.setValueAtTime(260, t);
      bp.frequency.exponentialRampToValueAtTime(1600, t + 1.15);
      bp.frequency.exponentialRampToValueAtTime(340, t + dur);
      const wg = ac.createGain();
      wg.gain.setValueAtTime(0.0001, t);
      wg.gain.exponentialRampToValueAtTime(0.32, t + 1.0);
      wg.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      wind.connect(bp).connect(wg).connect(master);
      wind.start(t);

      // 2. Chuỗi chuông gió / đàn hạc ngũ cung trong trẻo (C5 D5 E5 G5 A5 C6 E6)
      const notes = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1318.5];
      notes.forEach((freq, i) => {
        const start = t + i * 0.14;
        const osc = ac.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, start);
        const g = ac.createGain();
        g.gain.setValueAtTime(0.0001, start);
        g.gain.exponentialRampToValueAtTime(0.16, start + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, start + 1.45);
        osc.connect(g).connect(master);
        osc.start(start);
        osc.stop(start + 1.5);
      });

      // 3. Hợp âm ấm áp bừng sáng khi mở trang
      [261.63, 329.63, 392.0].forEach((freq) => {
        const pad = ac.createOscillator();
        pad.type = "triangle";
        pad.frequency.setValueAtTime(freq, t + 1.05);
        const pg = ac.createGain();
        pg.gain.setValueAtTime(0.0001, t + 1.05);
        pg.gain.exponentialRampToValueAtTime(0.09, t + 1.25);
        pg.gain.exponentialRampToValueAtTime(0.0001, t + 3.0);
        pad.connect(pg).connect(master);
        pad.start(t + 1.05);
        pad.stop(t + 3.1);
      });

      setTimeout(() => ac.close(), 3600);
    } catch (err) { /* trình duyệt không hỗ trợ âm thanh */ }
  }

  /* ---------- Vào trang ---------- */
  const btn = document.getElementById("introBtn");
  btn.addEventListener("mouseenter", () => { if (!warping) targetSpeed = 8; });
  btn.addEventListener("mouseleave", () => { if (!warping) targetSpeed = 2.0; });

  let entered = false;
  function enter() {
    if (!ready || entered) return;
    entered = true;
    warping = true;
    targetSpeed = 68;
    swirl = 0.0036;
    intro.classList.add("warp");
    playNatureSound();

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
