/* =========================================================
   🤖 KHO AI HỖ TRỢ — thêm/sửa AI tại đây
   cat: chat | code | image | video | audio | study | work
   hue: màu logo (0-360), hot: true = đánh dấu nổi bật
   ========================================================= */
const AI_CATEGORIES = [
  { id: "all", name: "Tất cả", icon: "🌐" },
  { id: "chat", name: "Trò chuyện", icon: "💬" },
  { id: "code", name: "Lập trình & Vibe Coding", icon: "💻" },
  { id: "image", name: "Tạo ảnh", icon: "🎨" },
  { id: "video", name: "Tạo video", icon: "🎬" },
  { id: "audio", name: "Âm thanh & Nhạc", icon: "🎵" },
  { id: "study", name: "Học tập & Nghiên cứu", icon: "📚" },
  { id: "work", name: "Văn phòng & Thuyết trình", icon: "📊" },
];

const AI_TOOLS = [
  // 💬 Trò chuyện
  { name: "Gemini", by: "Google", cat: "chat", icon: "✨", hue: 215, hot: true, url: "https://gemini.google.com", desc: "Trợ lý AI đa năng của Google: hỏi đáp, viết bài, phân tích ảnh, tóm tắt tài liệu, tích hợp Gmail, Docs, YouTube." },
  { name: "ChatGPT", by: "OpenAI", cat: "chat", icon: "🧠", hue: 160, url: "https://chatgpt.com", desc: "Chatbot AI nổi tiếng nhất thế giới, giỏi viết lách, giải thích kiến thức, lên ý tưởng và hỗ trợ code." },
  { name: "Claude", by: "Anthropic", cat: "chat", icon: "🪶", hue: 25, url: "https://claude.ai", desc: "AI trò chuyện mạnh về suy luận, viết văn tự nhiên, đọc tài liệu dài và lập trình." },
  { name: "Microsoft Copilot", by: "Microsoft", cat: "chat", icon: "🪁", hue: 195, url: "https://copilot.com", desc: "Trợ lý AI của Microsoft, tích hợp Windows, Edge và bộ Office (Word, Excel, PowerPoint)." },
  { name: "Grok", by: "xAI", cat: "chat", icon: "⚡", hue: 0, url: "https://grok.com", desc: "Chatbot AI của xAI, cập nhật tin tức nhanh từ mạng xã hội X." },
  { name: "DeepSeek", by: "DeepSeek", cat: "chat", icon: "🐋", hue: 225, url: "https://chat.deepseek.com", desc: "AI mã nguồn mở đến từ Trung Quốc, mạnh về toán học, suy luận và lập trình." },
  { name: "Meta AI", by: "Meta", cat: "chat", icon: "♾️", hue: 205, url: "https://www.meta.ai", desc: "Trợ lý AI tích hợp trong Facebook, Messenger, Instagram và WhatsApp." },

  // 💻 Lập trình & Vibe Coding
  { name: "Google Antigravity", by: "Google", cat: "code", icon: "🚀", hue: 265, hot: true, url: "https://antigravity.google", desc: "Nền tảng lập trình bằng AI agent: mô tả ý tưởng, AI tự viết code, chạy thử và sửa lỗi. Trang web này được làm bằng nó!" },
  { name: "Google AI Studio", by: "Google", cat: "code", icon: "🧪", hue: 200, hot: true, url: "https://aistudio.google.com", desc: "Thử nghiệm các mô hình Gemini miễn phí, lấy API key và tạo ứng dụng AI nhanh chóng." },
  { name: "GitHub Copilot", by: "GitHub", cat: "code", icon: "🐙", hue: 280, url: "https://github.com/features/copilot", desc: "Trợ lý gợi ý code ngay trong trình soạn thảo, hỗ trợ hầu hết ngôn ngữ lập trình." },
  { name: "Cursor", by: "Anysphere", cat: "code", icon: "🖱️", hue: 230, url: "https://cursor.com", desc: "Trình soạn thảo code tích hợp AI, chat với cả dự án và sửa nhiều file cùng lúc." },
  { name: "Lovable", by: "Lovable", cat: "code", icon: "💖", hue: 330, url: "https://lovable.dev", desc: "Tạo website, ứng dụng hoàn chỉnh chỉ bằng cách mô tả bằng lời — chuẩn Vibe Coding." },
  { name: "Bolt.new", by: "StackBlitz", cat: "code", icon: "⚡", hue: 50, url: "https://bolt.new", desc: "Viết, chạy và triển khai ứng dụng web full-stack ngay trên trình duyệt bằng AI." },
  { name: "v0", by: "Vercel", cat: "code", icon: "🔺", hue: 0, url: "https://v0.app", desc: "Tạo giao diện web đẹp từ mô tả hoặc ảnh chụp, xuất ra code React sẵn dùng." },
  { name: "Replit", by: "Replit", cat: "code", icon: "🌀", hue: 20, url: "https://replit.com", desc: "Lập trình online với AI Agent, tạo và đăng ứng dụng lên mạng chỉ trong vài phút." },

  // 🎨 Tạo ảnh
  { name: "Gemini (Tạo ảnh)", by: "Google", cat: "image", icon: "🍌", hue: 48, hot: true, url: "https://gemini.google.com", desc: "Tạo và chỉnh sửa ảnh bằng lời nói ngay trong Gemini: đổi nền, ghép ảnh, đổi phong cách." },
  { name: "Midjourney", by: "Midjourney", cat: "image", icon: "⛵", hue: 240, url: "https://www.midjourney.com", desc: "Tạo ảnh nghệ thuật chất lượng rất cao, nổi tiếng với phong cách đẹp như tranh vẽ." },
  { name: "Adobe Firefly", by: "Adobe", cat: "image", icon: "🔥", hue: 10, url: "https://firefly.adobe.com", desc: "AI tạo ảnh của Adobe, tích hợp Photoshop, an toàn bản quyền cho thiết kế." },
  { name: "Leonardo AI", by: "Leonardo", cat: "image", icon: "🦁", hue: 285, url: "https://leonardo.ai", desc: "Tạo ảnh, nhân vật game, concept art với nhiều mô hình và phong cách." },
  { name: "Ideogram", by: "Ideogram", cat: "image", icon: "🔤", hue: 175, url: "https://ideogram.ai", desc: "Tạo ảnh có chữ rõ nét, rất hợp làm poster, logo, thiệp." },
  { name: "Canva AI", by: "Canva", cat: "image", icon: "🖌️", hue: 185, url: "https://www.canva.com", desc: "Thiết kế ảnh, poster, bài đăng mạng xã hội với các công cụ AI cực dễ dùng." },

  // 🎬 Tạo video
  { name: "Veo", by: "Google DeepMind", cat: "video", icon: "🎥", hue: 210, hot: true, url: "https://deepmind.google/models/veo/", desc: "Mô hình tạo video của Google, tạo cảnh quay chân thực kèm âm thanh từ mô tả." },
  { name: "Sora", by: "OpenAI", cat: "video", icon: "🌊", hue: 200, url: "https://sora.com", desc: "Tạo video ngắn từ văn bản hoặc hình ảnh của OpenAI." },
  { name: "Runway", by: "Runway", cat: "video", icon: "🛫", hue: 300, url: "https://runway.com", desc: "Bộ công cụ làm phim bằng AI: tạo video, xóa nền, chỉnh sửa chuyển động." },
  { name: "Kling AI", by: "Kuaishou", cat: "video", icon: "🎞️", hue: 140, url: "https://kling.ai", desc: "Tạo video từ ảnh hoặc chữ với chuyển động mượt và nhân vật sống động." },
  { name: "Pika", by: "Pika Labs", cat: "video", icon: "🐰", hue: 320, url: "https://pika.art", desc: "Tạo video vui nhộn, hiệu ứng biến hình độc đáo cho mạng xã hội." },
  { name: "CapCut", by: "ByteDance", cat: "video", icon: "✂️", hue: 0, url: "https://www.capcut.com", desc: "Chỉnh video với AI: tự tạo phụ đề, xóa nền, giọng đọc AI, hiệu ứng TikTok." },

  // 🎵 Âm thanh & Nhạc
  { name: "Suno", by: "Suno", cat: "audio", icon: "🎶", hue: 35, url: "https://suno.com", desc: "Sáng tác bài hát hoàn chỉnh có lời và giai điệu chỉ từ một câu mô tả." },
  { name: "Udio", by: "Udio", cat: "audio", icon: "🎸", hue: 270, url: "https://www.udio.com", desc: "Tạo nhạc chất lượng cao với nhiều thể loại, có thể tự viết lời." },
  { name: "ElevenLabs", by: "ElevenLabs", cat: "audio", icon: "🎙️", hue: 0, url: "https://elevenlabs.io", desc: "Chuyển văn bản thành giọng nói cực tự nhiên, hỗ trợ tiếng Việt và lồng tiếng." },

  // 📚 Học tập & Nghiên cứu
  { name: "NotebookLM", by: "Google", cat: "study", icon: "📓", hue: 150, hot: true, url: "https://notebooklm.google.com", desc: "Tải tài liệu lên để AI tóm tắt, hỏi đáp, tạo podcast và sơ đồ tư duy — học bài siêu nhanh." },
  { name: "Perplexity", by: "Perplexity", cat: "study", icon: "🔎", hue: 180, url: "https://www.perplexity.ai", desc: "Công cụ tìm kiếm bằng AI, trả lời kèm nguồn trích dẫn rõ ràng." },
  { name: "Khanmigo", by: "Khan Academy", cat: "study", icon: "🦉", hue: 160, url: "https://www.khanmigo.ai", desc: "Gia sư AI của Khan Academy, hướng dẫn từng bước thay vì đưa đáp án." },
  { name: "QuillBot", by: "QuillBot", cat: "study", icon: "🪶", hue: 120, url: "https://quillbot.com", desc: "Viết lại câu, kiểm tra ngữ pháp và tóm tắt văn bản tiếng Anh." },
  { name: "Google Dịch", by: "Google", cat: "study", icon: "🌏", hue: 220, url: "https://translate.google.com", desc: "Dịch văn bản, hình ảnh, giọng nói giữa hơn 100 ngôn ngữ bằng AI." },

  // 📊 Văn phòng & Thuyết trình
  { name: "Gamma", by: "Gamma", cat: "work", icon: "🖼️", hue: 260, url: "https://gamma.app", desc: "Tạo slide thuyết trình, tài liệu, trang web đẹp mắt từ một câu mô tả." },
  { name: "Notion AI", by: "Notion", cat: "work", icon: "📝", hue: 0, url: "https://www.notion.com", desc: "Ghi chú, lập kế hoạch học tập và để AI viết, tóm tắt, sắp xếp nội dung." },
  { name: "Gemini trong Google Workspace", by: "Google", cat: "work", icon: "📎", hue: 140, url: "https://workspace.google.com", desc: "Dùng Gemini ngay trong Gmail, Docs, Sheets, Slides để viết, phân tích và tạo nội dung." },
  { name: "Microsoft 365 Copilot", by: "Microsoft", cat: "work", icon: "📈", hue: 30, url: "https://www.microsoft.com/microsoft-365/copilot", desc: "AI trong Word, Excel, PowerPoint: soạn văn bản, phân tích bảng tính, làm slide." },
];

/* =========================================================
   HIỂN THỊ KHO AI
   ========================================================= */
(function aiHub() {
  const tabsEl = document.getElementById("aiTabs");
  const gridEl = document.getElementById("aiGrid");
  const searchEl = document.getElementById("aiSearch");
  const emptyEl = document.getElementById("aiEmpty");
  if (!gridEl) return;

  const catName = Object.fromEntries(AI_CATEGORIES.map((c) => [c.id, c]));
  let current = "all";

  tabsEl.innerHTML = AI_CATEGORIES.map((c) => {
    const n = c.id === "all" ? AI_TOOLS.length : AI_TOOLS.filter((t) => t.cat === c.id).length;
    return `<button class="ai-tab${c.id === "all" ? " active" : ""}" data-cat="${c.id}">${c.icon} ${esc(c.name)} <b>${n}</b></button>`;
  }).join("");

  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");

  function render() {
    const q = norm(searchEl.value.trim());
    const list = AI_TOOLS.filter((t) => {
      if (current !== "all" && t.cat !== current) return false;
      if (!q) return true;
      return norm(`${t.name} ${t.by} ${t.desc} ${catName[t.cat].name}`).includes(q);
    });

    gridEl.innerHTML = list
      .map(
        (t, i) => `
      <a class="ai-card" href="${esc(t.url)}" target="_blank" rel="noopener" style="--h:${t.hue};animation-delay:${Math.min(i, 12) * 0.04}s">
        ${t.hot ? '<span class="ai-hot">⭐ Nổi bật</span>' : ""}
        <div class="ai-logo"><span>${t.icon}</span></div>
        <h3>${esc(t.name)}</h3>
        <div class="ai-by">${esc(t.by)}</div>
        <p>${esc(t.desc)}</p>
        <div class="ai-foot">
          <span class="ai-chip">${catName[t.cat].icon} ${esc(catName[t.cat].name)}</span>
          <span class="ai-go">Mở ↗</span>
        </div>
        <div class="glare"></div>
      </a>`
      )
      .join("");
    emptyEl.hidden = list.length > 0;
  }

  tabsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".ai-tab");
    if (!b) return;
    current = b.dataset.cat;
    tabsEl.querySelectorAll(".ai-tab").forEach((x) => x.classList.toggle("active", x === b));
    render();
  });
  searchEl.addEventListener("input", render);

  // Nghiêng 3D theo chuột cho từng thẻ AI
  gridEl.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".ai-card");
    if (!card || e.pointerType === "touch") return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.transform = `perspective(800px) rotateX(${(0.5 - py) * 14}deg) rotateY(${(px - 0.5) * 14}deg) translateY(-6px)`;
    card.style.setProperty("--gx", px * 100 + "%");
    card.style.setProperty("--gy", py * 100 + "%");
  });
  gridEl.addEventListener("pointerout", (e) => {
    const card = e.target.closest(".ai-card");
    if (card && !card.contains(e.relatedTarget)) card.style.transform = "";
  });

  render();

  // Hiệu ứng xuất hiện cho tiêu đề mục mới
  document.querySelectorAll("#ai .reveal").forEach((el) => io.observe(el));
})();
