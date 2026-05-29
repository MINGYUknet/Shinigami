// =========================
// MAINTENANCE CONTROLLER
// =========================

const MAINTENANCE_MODE = true; // ubah false untuk nonaktif

function createMaintenanceOverlay() {
  document.body.classList.add("maintenance-active");

  const overlay = document.createElement("div");
  overlay.id = "maintenance-overlay";

  overlay.innerHTML = `
    <div id="maintenance-box">
      <div class="icon">🔧</div>
      <h1>Shinigami Maintenance</h1>
      <p>Kami sedang melakukan peningkatan sistem agar lebih stabil dan cepat.</p>

      <div id="maintenance-time">Loading waktu...</div>

       <div class="badge">
      Semua halaman sementara tidak dapat diakses
    </div>

    <!-- WHATSAPP CHANNEL BUTTON -->
    <a
      href="https://whatsapp.com/channel/0029VbDSjy81dAw1Eyd5gy3i"
      target="_blank"
      class="wa-button"
    >
      💬 Join WhatsApp Channel
    </a>

  </div>
`;

  document.body.appendChild(overlay);

  // REAL TIME CLOCK
  setInterval(() => {
    const now = new Date();
    const el = document.getElementById("maintenance-time");
    if (el) {
      el.innerText = "Waktu sekarang: " + now.toLocaleString("id-ID");
    }
  }, 1000);
}

// =========================
// INIT
// =========================
document.addEventListener("DOMContentLoaded", () => {
  if (MAINTENANCE_MODE) {
    createMaintenanceOverlay();
  }
});