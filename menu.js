const menuItems = [
  { name: "Home", page: "/pages/home.html" },
  { name: "Gallery", page: "/pages/gallery.html" },
  { name: "Video", page: "/pages/video.html" },
  { name: "Social", page: "/pages/social.html" },
  { name: "Contact", page: "/pages/contact.html" },
  { name: "Ask Team", page: "/pages/askteam.html" }
];

// render menu
function loadMenu() {
  const menuList = document.getElementById("menuList");

  menuItems.forEach(item => {
    const li = document.createElement("li");

    li.innerText = item.name;
    li.className = "cursor-pointer hover:text-cyan-400";

    li.onclick = () => {
      document.getElementById("frame").src = item.page;
      closeMenu();
    };

    menuList.appendChild(li);
  });
}

// auto run
window.addEventListener("DOMContentLoaded", loadMenu);