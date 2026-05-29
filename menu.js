const MENU_CONFIG = {
  brand: "Shinigami Panel",
  items: [
    { name: "Dashboard", icon: "🏠", link: "index.html" },
    { name: "Gallery", icon: "🖼️", link: "gallery.html" },
    { name: "Settings", icon: "⚙️", link: "settings.html" }
  ]
};

// =========================
// CREATE SIDEBAR
// =========================
function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "global-sidebar";

  let itemsHTML = "";

  MENU_CONFIG.items.forEach(item => {
    itemsHTML += `
      <a class="menu-item" href="${item.link}">
        <span class="icon">${item.icon}</span>
        <span class="text">${item.name}</span>
      </a>
    `;
  });

  sidebar.innerHTML = `
    <div class="brand">
      🔥 ${MENU_CONFIG.brand}
    </div>

    <div class="menu">
      ${itemsHTML}
    </div>
  `;

  document.body.appendChild(sidebar);
}

// =========================
// CREATE TOPBAR
// =========================
function createTopbar() {
  const topbar = document.createElement("div");
  topbar.id = "global-topbar";

  topbar.innerHTML = `
    <div class="left">☰ Menu</div>
    <div class="right" id="live-time"></div>
  `;

  document.body.appendChild(topbar);

  setInterval(() => {
    const el = document.getElementById("live-time");
    if (el) {
      el.innerText = new Date().toLocaleString("id-ID");
    }
  }, 1000);
}

// =========================
// INIT MENU
// =========================
document.addEventListener("DOMContentLoaded", () => {
  createSidebar();
  createTopbar();

  // lock UI kalau maintenance aktif
  if (typeof MAINTENANCE_MODE !== "undefined" && MAINTENANCE_MODE) {
    document.body.classList.add("menu-disabled");
  }
});