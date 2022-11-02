// Main JavaScript file for the application

// Variables
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Animate the hamburger menu
hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
});

// Highlight the menu item that is currently active
menu.addEventListener('click', function () {
    this.classList.toggle('is-active');
});