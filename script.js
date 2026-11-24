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
    { emoji: "🌿", title: "Portfolio 3D", sub: "Dự án Vibe Coding", desc: "Trang web giới thiệu bản thân với hiệu ứng 3D thiên nhiên, cây ánh sáng và rừng đom đóm — được tạo hoàn toàn bằng Vibe Coding.", tags: ["Vibe Coding", "HTML", "3D"], link: "#" },
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
    email: "klocevin@gmail.com",
    phone: "0941 144 975",
    location: "", // Điền tỉnh/thành nếu muốn hiển thị, để trống sẽ ẩn
    socials: [
      { name: "💬 Zalo", url: "https://zalo.me/0941144975" },
      { name: "🐙 GitHub", url: "https://github.com/klocevin-ai" },
      { name: "📧 Gmail", url: "mailto:klocevin@gmail.com" },
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
$("#footerText").textContent = `© ${new Date().getFullYear()} ${PROFILE.name} · Thiết kế với 🌿 và một chút phép thuật 3D`;

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
  ${C.location ? `<div class="c-row"><div class="c-icon">📍</div><div><small>Địa chỉ</small>${esc(C.location)}</div></div>` : ""}
  <div class="socials">${C.socials.map((s) => `<a class="social" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>`).join("")}</div>`;

/* =========================================================
   NỀN 3D THIÊN NHIÊN: ĐỒI NÚI 3D + CÂY ÁNH SÁNG + LÁ BAY + ĐOM ĐÓM
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

// Bộ sinh số ngẫu nhiên cố định để Cây 3D luôn có dáng đẹp cân đối
let seed = 25032011;
function rand() {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
}

/* ---------- 1. Cây Ánh Sáng 3D (thân cành đệ quy + tán lá hạt + đồi rêu) ---------- */
const branches = [];
const canopy = [];

function addBranch(x, y, z, dx, dy, dz, len, depth) {
  const x2 = x + dx * len;
  const y2 = y + dy * len;
  const z2 = z + dz * len;
  branches.push({ x1: x, y1: y, z1: z, x2, y2, z2, depth });

  if (depth === 0) {
    // Tán lá phát sáng ở đầu cành
    const count = isMobile ? 11 : 18;
    for (let i = 0; i < count; i++) {
      const a = rand() * Math.PI * 2;
      const u = rand() * 2 - 1;
      const r = 0.08 + rand() * 0.28;
      const sr = Math.sqrt(1 - u * u);
      const isGold = rand() < 0.16;
      canopy.push({
        x: x2 + Math.cos(a) * sr * r * 1.3,
        y: y2 + u * r * 0.78 + 0.05,
        z: z2 + Math.sin(a) * sr * r * 1.3,
        hue: isGold ? 44 + rand() * 14 : 122 + rand() * 48,
        light: isGold ? 74 : 58 + rand() * 18,
        size: isGold ? 2.4 : 1.7 + rand() * 1.8,
        phase: rand() * Math.PI * 2,
        gold: isGold,
      });
    }
    // Dây liễu phát sáng rủ nhẹ dưới tán
    for (let k = 1; k <= 3; k++) {
      canopy.push({
        x: x2 + (rand() - 0.5) * 0.12,
        y: y2 - k * 0.095,
        z: z2 + (rand() - 0.5) * 0.12,
        hue: 155 + rand() * 25,
        light: 72,
        size: 1.5 - k * 0.25,
        phase: rand() * Math.PI * 2,
        gold: k === 3,
      });
    }
    return;
  }

  const children = depth >= 2 ? 3 : 2;
  const baseAngle = rand() * Math.PI * 2;
  for (let i = 0; i < children; i++) {
    const az = baseAngle + (i * Math.PI * 2) / children + (rand() - 0.5) * 0.55;
    const spread = depth === 3 ? 0.52 + rand() * 0.18 : 0.45 + rand() * 0.22;
    let ndx = dx * 0.55 + Math.cos(az) * spread;
    let ndy = Math.max(0.28, dy * 0.78 + 0.18 + (rand() - 0.5) * 0.16);
    let ndz = dz * 0.55 + Math.sin(az) * spread;
    const norm = Math.hypot(ndx, ndy, ndz);
    addBranch(x2, y2, z2, ndx / norm, ndy / norm, ndz / norm, len * (0.68 + rand() * 0.12), depth - 1);
  }
}

// Khởi tạo thân chính từ gốc (y = -0.95) vươn lên
addBranch(0, -0.95, 0, 0, 1, 0, 0.54, 3);

// Đồi rêu nổi 3D dưới gốc cây
const mound = [];
const MOUND_N = isMobile ? 80 : 140;
for (let i = 0; i < MOUND_N; i++) {
  const a = rand() * Math.PI * 2;
  const rad = Math.sqrt(rand()) * 0.72;
  mound.push({
    x: Math.cos(a) * rad,
    y: -0.95 - rad * rad * 0.42 + (rand() - 0.5) * 0.04,
    z: Math.sin(a) * rad,
    hue: 135 + rand() * 32,
    size: 1.3 + rand() * 1.4,
  });
}

// Đom đóm bay quanh tán cây
const treeOrbit = [];
for (let i = 0; i < (isMobile ? 22 : 42); i++) {
  treeOrbit.push({
    a: rand() * Math.PI * 2,
    rad: 0.55 + rand() * 0.85,
    y: -0.5 + rand() * 1.65,
    speed: (0.002 + rand() * 0.004) * (rand() < 0.5 ? 1 : -1),
    bob: rand() * Math.PI * 2,
  });
}

/* ---------- 2. Đom đóm 3D bay khắp màn hình ---------- */
const fireflies = [];
const FF_N = isMobile ? 40 : 80;
for (let i = 0; i < FF_N; i++) {
  fireflies.push({
    x: (Math.random() - 0.5) * 2000,
    y: (Math.random() - 0.5) * 1200,
    z: 180 + Math.random() * 1400,
    vx: (Math.random() - 0.5) * 0.5,
    vy: -0.15 - Math.random() * 0.35,
    phase: Math.random() * Math.PI * 2,
    pulseSpeed: 0.002 + Math.random() * 0.003,
    hue: Math.random() < 0.65 ? 50 + Math.random() * 18 : 138 + Math.random() * 28,
  });
}

/* ---------- 3. Lá bay xoay 3D theo gió ---------- */
const leaves = [];
const LEAF_N = isMobile ? 20 : 38;
function resetLeaf(l, randomY) {
  l.x = (Math.random() - 0.5) * 2200;
  l.y = randomY ? (Math.random() - 0.5) * 1400 : -800 - Math.random() * 300;
  l.z = 220 + Math.random() * 1300;
  l.vy = 0.55 + Math.random() * 0.9;
  l.vx = 0.3 + Math.random() * 0.6;
  l.rx = Math.random() * Math.PI * 2;
  l.ry = Math.random() * Math.PI * 2;
  l.rz = Math.random() * Math.PI * 2;
  l.vrx = (Math.random() - 0.5) * 0.035;
  l.vry = (Math.random() - 0.5) * 0.035;
  l.vrz = (Math.random() - 0.5) * 0.02;
  l.size = 9 + Math.random() * 10;
  l.hue = Math.random() < 0.18 ? 44 + Math.random() * 12 : 118 + Math.random() * 44;
  l.phase = Math.random() * Math.PI * 2;
  return l;
}
for (let i = 0; i < LEAF_N; i++) leaves.push(resetLeaf({}, true));

/* ---------- 4. Sao đêm nhẹ trên đỉnh bầu trời ---------- */
const skyStars = [];
for (let i = 0; i < (isMobile ? 45 : 90); i++) {
  skyStars.push({ x: Math.random(), y: Math.random() * 0.52, r: 0.6 + Math.random() * 1.4, p: Math.random() * Math.PI * 2 });
}

/* ---------- Hàm địa hình đồi núi 3D ---------- */
function hillHeight(x, z) {
  const ridge = Math.sin(x * 0.42 + z * 0.35) * 0.55
    + Math.cos(x * 0.24 - z * 0.52) * 0.48
    + Math.sin(x * 0.85 + z * 0.7) * 0.18;
  // Hai bên cao như thung lũng núi, giữa thoai thoải để dễ đọc chữ
  const valley = Math.min(1.4, Math.abs(x) * 0.11);
  return ridge + valley;
}

let mx = 0, my = 0, smx = 0, smy = 0;
window.addEventListener("pointermove", (e) => {
  mx = (e.clientX / W) * 2 - 1;
  my = (e.clientY / H) * 2 - 1;
  const g = $("#cursorGlow");
  g.style.left = e.clientX + "px";
  g.style.top = e.clientY + "px";
});

function rotate3D(p, ax, ay) {
  const cy = Math.cos(ay), sy = Math.sin(ay);
  const x = p.x * cy + p.z * sy;
  let z = -p.x * sy + p.z * cy;
  const cx = Math.cos(ax), sx = Math.sin(ax);
  const y = p.y * cx - z * sx;
  z = p.y * sx + z * cx;
  return { x, y, z };
}

function drawLeaf3D(x, y, size, rx, ry, rz, hue, alpha) {
  const sx = Math.max(0.22, Math.abs(Math.cos(rx)));
  const sy = Math.max(0.22, Math.abs(Math.cos(ry)));
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rz);
  ctx.scale(sx, sy);
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.quadraticCurveTo(size * 0.68, -size * 0.2, 0, size);
  ctx.quadraticCurveTo(-size * 0.68, -size * 0.2, 0, -size);
  ctx.fillStyle = `hsla(${hue}, 78%, 62%, ${alpha})`;
  ctx.fill();
  ctx.strokeStyle = `hsla(${hue + 10}, 95%, 80%, ${alpha * 0.7})`;
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.85);
  ctx.lineTo(0, size * 0.85);
  ctx.stroke();
  ctx.restore();
}

function frame(t) {
  ctx.clearRect(0, 0, W, H);
  smx += (mx - smx) * 0.05;
  smy += (my - smy) * 0.05;

  const sc = window.scrollY;
  const progress = Math.min(sc / H, 3);

  // --- A. Sao nhẹ + Cực quang sương xanh trên nền trời ---
  for (const s of skyStars) {
    const tw = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * 0.0018 + s.p));
    ctx.fillStyle = `rgba(215, 255, 232, ${tw * 0.55})`;
    ctx.beginPath();
    ctx.arc(s.x * W - smx * 16, s.y * H - smy * 10, s.r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Dải sương cực quang mềm mại
  const auroraY = H * 0.22 - smy * 18;
  const ag = ctx.createRadialGradient(W * 0.68 - smx * 40, auroraY, 20, W * 0.68, auroraY, Math.max(W, H) * 0.55);
  ag.addColorStop(0, "rgba(45, 212, 191, 0.11)");
  ag.addColorStop(0.5, "rgba(74, 222, 128, 0.05)");
  ag.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = ag;
  ctx.fillRect(0, 0, W, H);

  // --- B. Địa hình núi đồi 3D lướt nhẹ theo cuộn trang & chuột ---
  const COLS = isMobile ? 20 : 34;
  const ROWS = isMobile ? 12 : 18;
  const fovT = Math.min(W, H) * 0.82;
  const phaseZ = t * 0.00045 + sc * 0.0022;
  const camX = smx * 1.5;
  const camY = 2.65 - smy * 0.45;
  const horizonY = H * 0.58;

  for (let iz = ROWS - 1; iz >= 0; iz--) {
    const z = 1.6 + iz * 0.52;
    const scale = fovT / z;
    const depthFade = 1 - iz / ROWS; // 0 ở xa, 1 ở gần
    const pts = [];

    for (let ix = 0; ix <= COLS; ix++) {
      const wx = (ix - COLS / 2) * 0.85;
      const wy = hillHeight(wx, z + phaseZ);
      pts.push({
        x: W / 2 + (wx - camX) * scale,
        y: horizonY + (camY - wy) * scale,
      });
    }

    // Đổ bóng núi sương mờ tạo chiều sâu 3D
    ctx.beginPath();
    ctx.moveTo(pts[0].x, H + 20);
    for (let i = 0; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.lineTo(pts[pts.length - 1].x, H + 20);
    ctx.closePath();
    ctx.fillStyle = `rgba(4, ${Math.floor(19 + depthFade * 14)}, ${Math.floor(15 + depthFade * 10)}, ${0.26 + depthFade * 0.28})`;
    ctx.fill();

    // Đường đồng mức phát sáng mềm trên sườn núi
    ctx.beginPath();
    for (let i = 0; i < pts.length; i++) {
      if (i === 0) ctx.moveTo(pts[i].x, pts[i].y);
      else ctx.lineTo(pts[i].x, pts[i].y);
    }
    const lineAlpha = Math.sin(depthFade * Math.PI) * 0.34;
    ctx.strokeStyle = `hsla(${150 + depthFade * 22}, 75%, 56%, ${lineAlpha})`;
    ctx.lineWidth = 0.8 + depthFade * 0.9;
    ctx.stroke();
  }

  // --- C. Cây Ánh Sáng 3D (xoay & đung đưa theo gió) ---
  const treeAlpha = Math.max(isMobile ? 0.16 : 0.24, (isMobile ? 0.55 : 0.98) - progress * 0.45);
  const R = Math.min(W, H) * (isMobile ? 0.34 : 0.34) * (1 + progress * 0.12);
  const cx = isMobile ? W * 0.5 : W * 0.74 - progress * W * 0.18;
  const cy = H * 0.54 + (isMobile ? -H * 0.02 : 0);
  const ay = t * 0.00022 + smx * 0.65 + sc * 0.0014;
  const ax = 0.18 + smy * 0.28;

  // Vầng sáng ấm phía sau tán cây
  const tg = ctx.createRadialGradient(cx, cy - R * 0.25, R * 0.05, cx, cy - R * 0.15, R * 1.15);
  tg.addColorStop(0, `rgba(74, 222, 128, ${0.14 * treeAlpha})`);
  tg.addColorStop(0.5, `rgba(45, 212, 191, ${0.06 * treeAlpha})`);
  tg.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = tg;
  ctx.beginPath();
  ctx.arc(cx, cy - R * 0.15, R * 1.15, 0, Math.PI * 2);
  ctx.fill();

  // Đồi rêu 3D dưới gốc
  for (const m of mound) {
    const r = rotate3D(m, ax, ay);
    const persp = 3.2 / (3.2 - r.z);
    const sx = cx + r.x * R * persp;
    const sy = cy - r.y * R * persp;
    const a = ((r.z + 1.4) / 2.4) * treeAlpha * 0.7;
    ctx.fillStyle = `hsla(${m.hue}, 70%, 52%, ${a})`;
    ctx.beginPath();
    ctx.arc(sx, sy, m.size * persp, 0, Math.PI * 2);
    ctx.fill();
  }

  // Thân và cành cây 3D
  ctx.lineCap = "round";
  for (const b of branches) {
    const r1 = rotate3D({ x: b.x1, y: b.y1, z: b.z1 }, ax, ay);
    const r2 = rotate3D({ x: b.x2, y: b.y2, z: b.z2 }, ax, ay);
    const p1 = 3.2 / (3.2 - r1.z);
    const p2 = 3.2 / (3.2 - r2.z);
    const mz = (r1.z + r2.z) * 0.5;
    const a = Math.max(0.15, ((mz + 1.4) / 2.4)) * treeAlpha * 0.85;
    ctx.strokeStyle = `rgba(118, 198, 155, ${a * 0.72})`;
    ctx.lineWidth = (b.depth * 2.1 + 1.2) * ((p1 + p2) * 0.5);
    ctx.beginPath();
    ctx.moveTo(cx + r1.x * R * p1, cy - r1.y * R * p1);
    ctx.lineTo(cx + r2.x * R * p2, cy - r2.y * R * p2);
    ctx.stroke();
  }

  // Tán lá phát sáng 3D đung đưa nhẹ theo gió
  for (const p of canopy) {
    const sway = Math.sin(t * 0.0016 + p.phase) * 0.028;
    const r = rotate3D({ x: p.x + sway, y: p.y + sway * 0.5, z: p.z }, ax, ay);
    const persp = 3.2 / (3.2 - r.z);
    const sx = cx + r.x * R * persp;
    const sy = cy - r.y * R * persp;
    const twinkle = p.gold ? 0.65 + 0.35 * Math.sin(t * 0.004 + p.phase) : 1;
    const a = Math.max(0.08, ((r.z + 1.4) / 2.4)) * treeAlpha * twinkle;
    ctx.fillStyle = `hsla(${p.hue}, 88%, ${p.light}%, ${a})`;
    ctx.beginPath();
    ctx.arc(sx, sy, p.size * persp, 0, Math.PI * 2);
    ctx.fill();
  }

  // Đom đóm bay quanh tán cây
  for (const q of treeOrbit) {
    q.a += q.speed;
    const p = {
      x: Math.cos(q.a) * q.rad,
      y: q.y + Math.sin(t * 0.002 + q.bob) * 0.08,
      z: Math.sin(q.a) * q.rad,
    };
    const r = rotate3D(p, ax * 0.8, ay * 0.3);
    const persp = 3.2 / (3.2 - r.z);
    const sx = cx + r.x * R * persp;
    const sy = cy - r.y * R * persp;
    const pulse = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * 0.0045 + q.bob));
    const a = Math.max(0.1, (r.z + 1.6) / 2.6) * treeAlpha * pulse;
    const radG = 7 * persp;
    const fg = ctx.createRadialGradient(sx, sy, 0, sx, sy, radG);
    fg.addColorStop(0, `rgba(254, 240, 138, ${a})`);
    fg.addColorStop(1, "rgba(250, 204, 21, 0)");
    ctx.fillStyle = fg;
    ctx.beginPath();
    ctx.arc(sx, sy, radG, 0, Math.PI * 2);
    ctx.fill();
  }

  // --- D. Đom đóm 3D bay lơ lửng toàn khung hình ---
  const fovP = 420;
  for (const f of fireflies) {
    f.x += f.vx + Math.sin(t * 0.001 + f.phase) * 0.45 + smx * 0.35;
    f.y += f.vy + Math.cos(t * 0.0012 + f.phase) * 0.25;
    f.z += Math.sin(t * 0.0008 + f.phase) * 0.8;
    if (f.y < -700) f.y = 700;
    if (f.x < -1100) f.x = 1100;
    if (f.x > 1100) f.x = -1100;

    const k = fovP / f.z;
    const sx = W / 2 + (f.x - smx * 110) * k;
    const sy = H / 2 + (f.y - smy * 90) * k;
    if (sx < -30 || sx > W + 30 || sy < -30 || sy > H + 30) continue;

    const pulse = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t * f.pulseSpeed + f.phase));
    const depthA = Math.max(0.15, 1 - f.z / 1650);
    const glowR = (5 + depthA * 9) * pulse;
    const fg = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowR);
    fg.addColorStop(0, `hsla(${f.hue}, 100%, 82%, ${depthA * pulse * 0.95})`);
    fg.addColorStop(0.45, `hsla(${f.hue}, 95%, 60%, ${depthA * pulse * 0.35})`);
    fg.addColorStop(1, `hsla(${f.hue}, 95%, 55%, 0)`);
    ctx.fillStyle = fg;
    ctx.beginPath();
    ctx.arc(sx, sy, glowR, 0, Math.PI * 2);
    ctx.fill();
  }

  // --- E. Lá bay xoay 3D theo làn gió ---
  for (const l of leaves) {
    l.x += l.vx + Math.sin(t * 0.0012 + l.phase) * 0.9 + smx * 0.8;
    l.y += l.vy;
    l.z -= 0.45;
    l.rx += l.vrx;
    l.ry += l.vry;
    l.rz += l.vrz;
    if (l.y > 850 || l.z < 120) resetLeaf(l, false);

    const k = fovP / l.z;
    const sx = W / 2 + (l.x - smx * 130) * k;
    const sy = H / 2 + (l.y - smy * 90) * k;
    if (sx < -40 || sx > W + 40 || sy < -40 || sy > H + 40) continue;

    const alpha = Math.min(0.85, (1 - l.z / 1600) * 0.9);
    drawLeaf3D(sx, sy, l.size * k, l.rx, l.ry, l.rz, l.hue, alpha);
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
