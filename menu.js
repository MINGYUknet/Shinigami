const menuItems = [
  { name: "Home", target: "home" },
  { name: "Gallery", target: "gallery" },
  { name: "Video", target: "video" },
  { name: "Social", target: "social" },
  { name: "Contact", target: "contact" }
];

// render menu otomatis
function loadMenu() {
  const menuList = document.getElementById("menuList");

  menuItems.forEach(item => {
    const li = document.createElement("li");

    li.innerText = item.name;
    li.className = "cursor-pointer hover:text-cyan-400";

    li.onclick = () => {
      document.getElementById(item.target)
        .scrollIntoView({ behavior: "smooth" });

      closeMenu();
    };

    menuList.appendChild(li);
  });
}

window.addEventListener("DOMContentLoaded", loadMenu);