// Main JavaScript file for the application

// Variables
const mobileMenu = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Highlight the menu item that is currently active
menu.addEventListener('click', function () {
    this.classList.toggle('is-active');
});

// Animate the hamburger menu and show the mobile menu
hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');

});
