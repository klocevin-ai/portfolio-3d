/* =========================================================
   ✏️ CHỈNH SỬA THÔNG TIN CỦA BẠN TẠI ĐÂY
   ========================================================= */
const PROFILE = {
  name: "Huỳnh Phúc Khánh Lộc",
  initials: "KL",
  avatar: "avatar.jpg", // Đường dẫn ảnh. Để trống "" sẽ hiện chữ viết tắt
  // Căn khung ảnh trong vòng tròn: size = độ phóng to, position = vị trí "ngang dọc"
  avatarFocus: { size: "263% auto", position: "50% 41%" },
  birthday: { day: 25, month: 3, year: 2011 }, // 25/03/2011
  roles: ["CEO Gemini Center", "Học sinh trường Nguyễn Đình Chiểu", "Vibe Coder đang luyện công", "Người đam mê AI & công nghệ"],
  intro: "Học sinh trường Nguyễn Đình Chiểu, CEO của Gemini Center — đang trên hành trình chinh phục Vibe Coding: biến ý tưởng thành sản phẩm thật cùng trí tuệ nhân tạo.",
  about:
    "Xin chào! Tôi là Huỳnh Phúc Khánh Lộc — học sinh trường Nguyễn Đình Chiểu, sinh ngày 25/03/2011. Hiện tại tôi đang đảm nhận vai trò CEO của Gemini Center — nơi tôi cùng mọi người khám phá và ứng dụng sức mạnh của AI.\n\nTôi đang được train về Vibe Coding: lập trình bằng cách trò chuyện với AI, mô tả ý tưởng và để AI cùng mình hiện thực hóa nó. Chính trang web 3D bạn đang xem cũng được tạo ra bằng Vibe Coding! 🚀",
  stats: [
    { age: true, suffix: " tuổi", label: "Sinh ngày 25/03/2011 🎂" }, // tuổi tự tính theo ngày sinh
    { text: "CEO", label: "Gemini Center" },
    { num: 100, suffix: "%", label: "Đam mê AI" },
  ],
  cube: [
    { icon: "✨", text: "Gemini" },
    { icon: "🎧", text: "Vibe Code" },
    { icon: "🤖", text: "AI" },
    { icon: "💬", text: "Prompt" },
    { icon: "🌐", text: "Web" },
    { icon: "💡", text: "Ý tưởng" },
  ],
  skills: [
    { name: "Sử dụng AI (Gemini)", level: 90 },
    { name: "Prompt Engineering", level: 85 },
    { name: "Vibe Coding", level: 75 },
    { name: "Lãnh đạo & Quản lý", level: 85 },
    { name: "Tư duy sáng tạo", level: 90 },
    { name: "HTML / CSS / JS", level: 60 },
  ],
  projects: [
    { emoji: "✨", title: "Gemini Center", sub: "Vai trò: CEO", desc: "Trung tâm nơi tôi dẫn dắt và cùng mọi người tìm hiểu, ứng dụng AI Gemini vào học tập và sáng tạo.", tags: ["AI", "Gemini", "Lãnh đạo"], link: "#" },
    { emoji: "🌌", title: "Portfolio 3D", sub: "Dự án Vibe Coding", desc: "Trang web giới thiệu bản thân với hiệu ứng 3D, màn mở đầu xuyên không gian — được tạo hoàn toàn bằng Vibe Coding.", tags: ["Vibe Coding", "HTML", "3D"], link: "#" },
    { emoji: "📚", title: "Trợ lý học tập AI", sub: "Đang phát triển", desc: "Ý tưởng về một trợ lý AI giúp học sinh ôn bài, giải đáp thắc mắc và lên kế hoạch học tập.", tags: ["AI", "Giáo dục"], link: "#" },
    { emoji: "🎮", title: "Game mini bằng AI", sub: "Sắp ra mắt", desc: "Thử thách tự tạo một trò chơi nhỏ chạy trên trình duyệt chỉ bằng cách trò chuyện với AI.", tags: ["Vibe Coding", "Game"], link: "#" },
  ],
  timeline: [
    { time: "Hiện tại", title: "Đang train Vibe Coding", place: "Tự học cùng AI", desc: "Học cách biến ý tưởng thành sản phẩm thật bằng việc lập trình cùng trí tuệ nhân tạo." },
    { time: "Hiện tại", title: "CEO", place: "Gemini Center", desc: "Dẫn dắt Gemini Center, lan tỏa niềm đam mê AI và công nghệ đến mọi người." },
    { time: "Hiện tại", title: "Học sinh", place: "Trường Nguyễn Đình Chiểu", desc: "Vừa học tập trên trường, vừa không ngừng khám phá thế giới công nghệ." },
    { time: "25/03/2011", title: "Ngày tôi chào đời 🎂", place: "Khởi đầu hành trình", desc: "Ngày đặc biệt nhất — điểm bắt đầu của mọi câu chuyện." },
  ],
  contact: {
    email: "email.cua.ban@gmail.com",
    phone: "0123 456 789",
    location: "Hà Nội, Việt Nam",
    socials: [
      { name: "📘 Facebook", url: "https://facebook.com" },
      { name: "🐙 GitHub", url: "https://github.com" },
      { name: "💼 LinkedIn", url: "https://linkedin.com" },
      { name: "📸 Instagram", url: "https://instagram.com" },
    ],
  },
};

/* =========================================================
   RENDER NỘI DUNG
   ========================================================= */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

document.title = `${PROFILE.name} | Giới thiệu bản thân`;
$("#logo").textContent = PROFILE.initials;
$("#heroName").textContent = PROFILE.name;
$("#heroIntro").textContent = PROFILE.intro;
$("#aboutText").textContent = PROFILE.about;
$("#footerText").textContent = `© ${new Date().getFullYear()} ${PROFILE.name} · Thiết kế với ❤️ và một chút phép thuật 3D`;

const avatarEl = $("#avatar");
if (PROFILE.avatar) {
  avatarEl.style.backgroundImage = `url("${PROFILE.avatar}")`;
  if (PROFILE.avatarFocus) {
    avatarEl.style.backgroundSize = PROFILE.avatarFocus.size;
    avatarEl.style.backgroundPosition = PROFILE.avatarFocus.position;
  }
} else avatarEl.textContent = PROFILE.initials;

// Tự tính tuổi từ ngày sinh (tự tăng mỗi năm)
function calcAge(b) {
  const now = new Date();
  let age = now.getFullYear() - b.year;
  if (now.getMonth() + 1 < b.month || (now.getMonth() + 1 === b.month && now.getDate() < b.day)) age--;
  return age;
}
PROFILE.stats.forEach((s) => { if (s.age && PROFILE.birthday) s.num = calcAge(PROFILE.birthday); });

$("#stats").innerHTML = PROFILE.stats
  .map((s) =>
    typeof s.num === "number"
      ? `<div class="stat"><div class="stat-num" data-count="${s.num}" data-suffix="${esc(s.suffix || "")}">0</div><div class="stat-label">${esc(s.label)}</div></div>`
      : `<div class="stat"><div class="stat-num">${esc(s.text)}</div><div class="stat-label">${esc(s.label)}</div></div>`
  )
  .join("");

// 🎂 Đúng ngày sinh nhật: thêm lời chào đặc biệt vào hiệu ứng gõ chữ
const _today = new Date();
if (PROFILE.birthday && _today.getDate() === PROFILE.birthday.day && _today.getMonth() + 1 === PROFILE.birthday.month) {
  PROFILE.roles.unshift("🎂 Hôm nay là sinh nhật tôi!");
}

$("#cube").innerHTML = PROFILE.cube
  .slice(0, 6)
  .map((f) => `<div class="face"><span class="icon">${f.icon}</span>${esc(f.text)}</div>`)
  .join("");

$("#skillBars").innerHTML = PROFILE.skills
  .map((s) => `<div class="skill"><div class="skill-head"><span>${esc(s.name)}</span><span>${s.level}%</span></div><div class="bar"><div class="bar-fill" data-level="${s.level}"></div></div></div>`)
  .join("");

$("#projectGrid").innerHTML = PROFILE.projects
  .map(
    (p, i) => `
  <div class="reveal" style="transition-delay:${(i % 3) * 0.12}s">
    <div class="flip-card">
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <div class="emoji" style="animation-delay:${i * 0.4}s">${p.emoji}</div>
          <h3>${esc(p.title)}</h3>
          <small>${esc(p.sub)}</small>
        </div>
        <div class="flip-face flip-back">
          <div>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc)}</p>
            <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          </div>
          <a class="btn btn-primary" href="${esc(p.link)}" target="_blank" rel="noopener">Xem chi tiết →</a>
        </div>
      </div>
    </div>
  </div>`
  )
  .join("");

$("#timeline").innerHTML = PROFILE.timeline
  .map(
    (t) => `
  <div class="tl-item reveal">
    <div class="tl-dot"></div>
    <div class="tl-card glass">
      <div class="tl-time">${esc(t.time)}</div>
      <h3>${esc(t.title)}</h3>
      <div class="tl-place">${esc(t.place)}</div>
      <p>${esc(t.desc)}</p>
    </div>
  </div>`
  )
  .join("");

const C = PROFILE.contact;
$("#contactInfo").innerHTML = `
  <h3>Hãy kết nối với tôi! 🤝</h3>
  <p>Tôi luôn sẵn sàng cho những cơ hội hợp tác, dự án mới hoặc đơn giản là một cuộc trò chuyện thú vị.</p>
  <div class="c-row"><div class="c-icon">📧</div><div><small>Email</small><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></div></div>
  <div class="c-row"><div class="c-icon">📞</div><div><small>Điện thoại</small><a href="tel:${esc(C.phone.replace(/\s/g, ""))}">${esc(C.phone)}</a></div></div>
  <div class="c-row"><div class="c-icon">📍</div><div><small>Địa chỉ</small>${esc(C.location)}</div></div>
  <div class="socials">${C.socials.map((s) => `<a class="social" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>`).join("")}</div>`;

/* =========================================================
   NỀN 3D: QUẢ CẦU HẠT + VÀNH ĐAI + SAO BAY
   ========================================================= */
const canvas = $("#bg3d");
const ctx = canvas.getContext("2d");
let W = 0, H = 0;

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resize();
window.addEventListener("resize", resize);

const isMobile = window.innerWidth < 800;
const GLOBE_N = isMobile ? 450 : 850;
const globe = [];
for (let i = 0; i < GLOBE_N; i++) {
  const y = 1 - (i / (GLOBE_N - 1)) * 2;
  const r = Math.sqrt(1 - y * y);
  const th = i * Math.PI * (3 - Math.sqrt(5));
  globe.push({ x: Math.cos(th) * r, y, z: Math.sin(th) * r, hue: 190 + (y + 1) * 70 });
}

const ring = [];
for (let i = 0; i < (isMobile ? 140 : 260); i++) {
  ring.push({ a: Math.random() * Math.PI * 2, rad: 1.45 + Math.random() * 0.4, y: (Math.random() - 0.5) * 0.08, s: 0.0015 + Math.random() * 0.003 });
}

const stars = [];
for (let i = 0; i < (isMobile ? 160 : 320); i++) {
  stars.push({ x: (Math.random() - 0.5) * 2400, y: (Math.random() - 0.5) * 2400, z: Math.random() * 2000 });
}

let mx = 0, my = 0, smx = 0, smy = 0;
window.addEventListener("pointermove", (e) => {
  mx = (e.clientX / W) * 2 - 1;
  my = (e.clientY / H) * 2 - 1;
  const g = $("#cursorGlow");
  g.style.left = e.clientX + "px";
  g.style.top = e.clientY + "px";
});

function rotate(p, ax, ay) {
  // Xoay quanh trục Y rồi trục X
  const cy = Math.cos(ay), sy = Math.sin(ay);
  let x = p.x * cy + p.z * sy;
  let z = -p.x * sy + p.z * cy;
  const cx = Math.cos(ax), sx = Math.sin(ax);
  const y = p.y * cx - z * sx;
  z = p.y * sx + z * cx;
  return { x, y, z };
}

let lastScroll = 0, scrollBoost = 0;
function frame(t) {
  ctx.clearRect(0, 0, W, H);
  smx += (mx - smx) * 0.05;
  smy += (my - smy) * 0.05;

  const sc = window.scrollY;
  scrollBoost += (Math.abs(sc - lastScroll) - scrollBoost) * 0.1;
  lastScroll = sc;
  const progress = Math.min(sc / H, 3);

  // --- Sao bay về phía người xem ---
  const fov = 380;
  const speed = 1.6 + scrollBoost * 0.6;
  for (const s of stars) {
    s.z -= speed;
    if (s.z < 1) { s.z = 2000; s.x = (Math.random() - 0.5) * 2400; s.y = (Math.random() - 0.5) * 2400; }
    const k = fov / s.z;
    const sx = W / 2 + (s.x - smx * 120) * k;
    const sy = H / 2 + (s.y - smy * 120) * k;
    if (sx < 0 || sx > W || sy < 0 || sy > H) continue;
    const a = Math.max(0, 1 - s.z / 2000);
    ctx.fillStyle = `rgba(200,220,255,${a * 0.9})`;
    const size = a * 2.2;
    ctx.fillRect(sx, sy, size, size);
  }

  // --- Quả cầu hạt 3D ---
  const R = Math.min(W, H) * (isMobile ? 0.34 : 0.3) * (1 + progress * 0.15);
  const cx = isMobile ? W / 2 : W * 0.72 - progress * W * 0.22;
  const cy = H * 0.5 + (isMobile ? -H * 0.05 : 0);
  const alphaG = Math.max(isMobile ? 0.18 : 0.28, (isMobile ? 0.55 : 1) - progress * 0.45);
  const ay = t * 0.00018 + smx * 0.7 + sc * 0.0015;
  const ax = 0.35 + smy * 0.45;

  for (const p of globe) {
    const r = rotate(p, ax, ay);
    const persp = 3 / (3 - r.z);
    const sx = cx + r.x * R * persp;
    const sy = cy + r.y * R * persp;
    const a = ((r.z + 1.3) / 2.3) * alphaG;
    const size = (r.z > 0 ? 1.9 : 1.1) * persp;
    ctx.fillStyle = `hsla(${p.hue},100%,65%,${a})`;
    ctx.beginPath();
    ctx.arc(sx, sy, size, 0, Math.PI * 2);
    ctx.fill();
  }

  // --- Vành đai quay quanh quả cầu ---
  const tilt = 1.15;
  for (const q of ring) {
    q.a += q.s;
    let p = { x: Math.cos(q.a) * q.rad, y: q.y, z: Math.sin(q.a) * q.rad };
    // nghiêng vành đai
    const y2 = p.y * Math.cos(tilt) - p.z * Math.sin(tilt);
    const z2 = p.y * Math.sin(tilt) + p.z * Math.cos(tilt);
    p = { x: p.x * Math.cos(0.35) - y2 * Math.sin(0.35), y: p.x * Math.sin(0.35) + y2 * Math.cos(0.35), z: z2 };
    const r = rotate(p, ax * 0.5, smx * 0.5);
    const persp = 3 / (3 - r.z);
    const sx = cx + r.x * R * persp;
    const sy = cy + r.y * R * persp;
    const a = ((r.z + 2) / 4) * alphaG;
    ctx.fillStyle = `rgba(255,${120 + Math.floor(r.z * 40)},220,${a})`;
    ctx.beginPath();
    ctx.arc(sx, sy, 1.3 * persp, 0, Math.PI * 2);
    ctx.fill();
  }

  // --- Parallax 3D cho nội dung hero ---
  if (sc < H) {
    $("#heroContent").style.transform = `rotateY(${smx * 8}deg) rotateX(${-smy * 8}deg)`;
  }

  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* =========================================================
   HIỆU ỨNG GÕ CHỮ
   ========================================================= */
(function typing() {
  const el = $("#typing");
  let ri = 0, ci = 0, deleting = false;
  function tick() {
    const word = PROFILE.roles[ri];
    ci += deleting ? -1 : 1;
    el.textContent = word.slice(0, ci);
    let delay = deleting ? 45 : 95;
    if (!deleting && ci === word.length) { deleting = true; delay = 1600; }
    else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % PROFILE.roles.length; delay = 400; }
    setTimeout(tick, delay);
  }
  tick();
})();

/* =========================================================
   TILT 3D THEO CHUỘT
   ========================================================= */
document.querySelectorAll("[data-tilt]").forEach((el) => {
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.classList.remove("resetting");
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 18}deg) rotateY(${(px - 0.5) * 18}deg) scale3d(1.03,1.03,1.03)`;
    el.style.setProperty("--gx", px * 100 + "%");
    el.style.setProperty("--gy", py * 100 + "%");
  });
  el.addEventListener("pointerleave", () => {
    el.classList.add("resetting");
    el.style.transform = "";
  });
});

/* =========================================================
   KHỐI LẬP PHƯƠNG 3D (tự xoay + kéo để xoay)
   ========================================================= */
(function cube() {
  const stage = $(".cube-stage");
  const cubeEl = $("#cube");
  let rx = -20, ry = 30, vx = 0.15, vy = 0.35, dragging = false, lx = 0, ly = 0;
  stage.addEventListener("pointerdown", (e) => { dragging = true; lx = e.clientX; ly = e.clientY; stage.setPointerCapture(e.pointerId); });
  stage.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    vy = (e.clientX - lx) * 0.4;
    vx = -(e.clientY - ly) * 0.4;
    lx = e.clientX; ly = e.clientY;
  });
  const stop = () => { dragging = false; };
  stage.addEventListener("pointerup", stop);
  stage.addEventListener("pointercancel", stop);
  (function loop() {
    if (!dragging) {
      // giảm dần về tốc độ tự xoay mặc định
      vx += (0.15 - vx) * 0.03;
      vy += (0.35 - vy) * 0.03;
    }
    rx += vx; ry += vy;
    cubeEl.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    requestAnimationFrame(loop);
  })();
})();

/* =========================================================
   XUẤT HIỆN KHI CUỘN + ĐẾM SỐ + THANH KỸ NĂNG
   ========================================================= */
function countUp(el) {
  const target = +el.dataset.count, suffix = el.dataset.suffix;
  const start = performance.now(), dur = 1800;
  (function step(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(start);
}

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("visible");
      el.querySelectorAll("[data-count]").forEach(countUp);
      el.querySelectorAll(".bar-fill").forEach((b) => (b.style.width = b.dataset.level + "%"));
      io.unobserve(el);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* =========================================================
   NAV: đổi nền khi cuộn, link đang xem, menu mobile
   ========================================================= */
const nav = $("#nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40), { passive: true });

const links = document.querySelectorAll(".nav-links a");
const secIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  },
  { rootMargin: "-50% 0px -50% 0px" }
);
document.querySelectorAll("section[id]").forEach((s) => secIO.observe(s));

const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
menuBtn.addEventListener("click", () => { menuBtn.classList.toggle("open"); navLinks.classList.toggle("open"); });
links.forEach((a) => a.addEventListener("click", () => { menuBtn.classList.remove("open"); navLinks.classList.remove("open"); }));

// Lật thẻ dự án khi chạm (mobile)
document.querySelectorAll(".flip-card").forEach((c) =>
  c.addEventListener("click", (e) => { if (!e.target.closest("a")) c.classList.toggle("flipped"); })
);

/* =========================================================
   FORM LIÊN HỆ → mở ứng dụng email
   ========================================================= */
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("#fName").value.trim();
  const email = $("#fEmail").value.trim();
  const msg = $("#fMsg").value.trim();
  const subject = encodeURIComponent(`Liên hệ từ ${name}`);
  const body = encodeURIComponent(`${msg}\n\n---\nTừ: ${name} (${email})`);
  window.location.href = `mailto:${C.email}?subject=${subject}&body=${body}`;
});
