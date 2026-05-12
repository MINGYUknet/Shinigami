<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Shinigami Robot</title>

<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap" rel="stylesheet">

<style>
  body { font-family: Inter, sans-serif; }
  .glass { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); }
</style>
</head>

<body class="bg-black text-white overflow-x-hidden">

<!-- LOADING -->
<div id="loading" class="fixed inset-0 flex items-center justify-center bg-black z-50">
  <h1 class="text-xl animate-pulse">Shinigami Robot Loading...</h1>
</div>

<!-- NAVBAR -->
<div class="fixed top-0 w-full flex justify-between items-center p-4 glass z-40">
  <h1 class="font-bold tracking-widest">Shinigami Robot</h1>
  <button onclick="openMenu()" class="text-2xl">☰</button>
</div>

<!-- SIDEBAR -->
<div id="sidebar" class="fixed top-0 right-0 w-72 h-full bg-black/95 p-6 transform translate-x-full transition duration-300 z-50">
  <button onclick="closeMenu()" class="text-xl mb-6">✕</button>

  <ul class="space-y-4">
    <li onclick="scrollToId('home')" class="cursor-pointer hover:text-cyan-400">Home</li>
    <li onclick="scrollToId('gallery')" class="cursor-pointer hover:text-cyan-400">Gallery</li>
    <li onclick="scrollToId('video')" class="cursor-pointer hover:text-cyan-400">Video</li>
    <li onclick="scrollToId('social')" class="cursor-pointer hover:text-cyan-400">Social</li>
    <li onclick="scrollToId('contact')" class="cursor-pointer hover:text-cyan-400">Contact</li>
  </ul>
</div>

<!-- HERO -->
<section id="home" class="h-screen flex items-center justify-center text-center px-4">
  <div>
    <h1 class="text-4xl font-bold mb-2">Welcome to Shinigami Robot</h1>
    <p class="text-gray-400">Elegant system • Modern UI • Future Bot Design</p>
  </div>
</section>

<!-- GALLERY -->
<section id="gallery" class="p-10">
  <h2 class="text-2xl mb-4 font-bold">Gallery</h2>
  <div class="grid grid-cols-2 gap-4">
    <img class="rounded-xl hover:scale-105 transition" src="https://source.unsplash.com/400x400/?robot" />
    <img class="rounded-xl hover:scale-105 transition" src="https://source.unsplash.com/400x400/?technology" />
  </div>
</section>

<!-- VIDEO -->
<section id="video" class="p-10">
  <h2 class="text-2xl mb-4 font-bold">Video</h2>
  <video class="rounded-xl w-full" controls>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4">
  </video>
</section>

<!-- SOCIAL -->
<section id="social" class="p-10">
  <h2 class="text-2xl mb-4 font-bold">Social Media</h2>
  <div class="flex gap-4">
    <a class="text-cyan-400 hover:underline">Instagram</a>
    <a class="text-blue-400 hover:underline">Facebook</a>
    <a class="text-green-400 hover:underline">WhatsApp</a>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="p-10">
  <h2 class="text-2xl mb-4 font-bold">Contact Form</h2>

  <div class="space-y-3">
    <input class="w-full p-3 rounded bg-gray-800" placeholder="Name"/>
    <input class="w-full p-3 rounded bg-gray-800" placeholder="Email"/>
    <textarea class="w-full p-3 rounded bg-gray-800" placeholder="Message"></textarea>

    <button class="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:scale-105 transition">
      Send Message
    </button>
  </div>
</section>

<script>
// LOADING
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 1500);
};

// SIDEBAR
function openMenu(){
  document.getElementById("sidebar").classList.remove("translate-x-full");
}
function closeMenu(){
  document.getElementById("sidebar").classList.add("translate-x-full");
}

// SCROLL
function scrollToId(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
  closeMenu();
}
</script>

</body>
</html>
