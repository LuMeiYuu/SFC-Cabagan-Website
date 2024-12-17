const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.non-drop');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            item.classList.toggle('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !navMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navItems.forEach(item => item.classList.remove('active'));
    }
});