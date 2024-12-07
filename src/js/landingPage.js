const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');
const closeMenu = document.getElementById('close-menu');

// Open sidebar on mobile
menuToggle.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('translate-x-0');
    backdrop.classList.remove('hidden');
});

// Close sidebar
closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
});

// Close sidebar when clicking on backdrop
backdrop.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
});