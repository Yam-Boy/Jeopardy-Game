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

//Function to calculate age based on date of birth
function calculateAge() {
    var birthDate = new Date(document.getElementById("dob").value);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById("age").value = age;
    if (age >= 12) {
        return true;
    } else {
        alert("You are not eligible to play the game");
        return false;
    }    
}
