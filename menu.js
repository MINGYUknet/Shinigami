const menuItems = [
  { name: "Home", page: "home.html" },
  { name: "Gallery", page: "/gallery/gallery.html" },
  { name: "Video", page: "/video/video.html" },
  { name: "Social", page: "/social/social.html" },
  { name: "Contact", page: "/contact/contact.html" },
  { name: "Ask Team", page: "/team/askteam.html" }
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