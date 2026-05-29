const MAINTENANCE_MODE = true;

document.addEventListener("DOMContentLoaded", () => {
  if (!MAINTENANCE_MODE) return;

  document.body.classList.add("maintenance-active");

  const overlay = document.createElement("div");
  overlay.id = "maintenance-overlay";

  overlay.innerHTML = `
    <div id="maintenance-box">
      <div class="icon">⚙️</div>

      <h1>Shinigami Maintenance</h1>

      <p>
        Kami sedang melakukan peningkatan sistem agar
        lebih stabil, cepat, dan modern.
      </p>

      <div id="maintenance-time"></div>

      <div class="badge">
        Semua halaman sementara tidak dapat diakses
      </div>

      <a
        href="https://whatsapp.com/channel/0029VbDSjy81dAw1Eyd5gy3i"
        target="_blank"
        class="wa-button"
      >
        💬 Join WhatsApp Channel Official
      </a>
    </div>
  `;

  document.body.appendChild(overlay);

  const updateClock = () => {
    const now = new Date();

    document.getElementById("maintenance-time").innerText =
      "Waktu sekarang: " +
      now.toLocaleString("id-ID");
  };

  updateClock();
  setInterval(updateClock, 1000);
});