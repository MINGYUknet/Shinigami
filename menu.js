const menuItems = [
  { name: "Home", page: "home.html" },
  { name: "Gallery", page: "/gallery/gallery.html" },
  { name: "Video", page: "/video/video.html" },
  { name: "Social", page: "/social/social.html" },
  { name: "Contact", page: "/contact/contact.html" },
  { name: "Ask Team", page: "/team/ask.html" }
];

function loadMenu() {
  const menuList = document.getElementById("menuList");

  menuItems.forEach(item => {
    const li = document.createElement("li");

    li.innerText = item.name;
    li.className = "menu-item px-3 py-2 rounded cursor-pointer hover:text-cyan-400 hover:bg-white/5 transition";

    li.onclick = () => {
      window.loadPage(item.page, item.name);
    };

    menuList.appendChild(li);
  });
}

window.addEventListener("DOMContentLoaded", loadMenu);