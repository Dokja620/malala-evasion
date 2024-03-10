// Nav bar
const menuBurger = document.querySelector('.menu-burger');
const navLinks = document.querySelector('.nav-links');
const bar = document.querySelector('.bar-f');
const bars = document.querySelector('.bar-s');

menuBurger.addEventListener('click', () => {
    toggleMenu();
});

// Function to toggle the menu
function toggleMenu() {
    navLinks.classList.toggle('mobile-menu');
    menuBurger.classList.toggle('shine');
    bar.classList.toggle('shrink');
    bars.classList.toggle('shrinks');

    // Toggle menu when clicking outside navLinks
    document.addEventListener('click', (event) => {
        const isClickInsideNavLinks = navLinks.contains(event.target);
        const isClickInsideMenuBurger = menuBurger.contains(event.target);

        if (!isClickInsideNavLinks && !isClickInsideMenuBurger) {
            navLinks.classList.remove('mobile-menu');
            menuBurger.classList.remove('shine');
            bar.classList.remove('shrink');
            bars.classList.remove('shrinks');
        }
    });
}

// Visit Nosy Be