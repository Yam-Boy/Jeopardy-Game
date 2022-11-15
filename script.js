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
}
//Global array to store the data
    var PlayersData = [];
    
//Function to validate the form
function Register() {
    var fname = document.forms["registration"]["fname"].value;
    var lname = document.forms["registration"]["lname"].value;
    var gender = document.forms["registration"]["gender"].value;
    var dob = document.forms["registration"]["dob"].value;
    var age = document.forms["registration"]["age"].value;
    var email = document.forms["registration"]["email"].value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var street = document.forms["registration"]["street"].value;
    var city = document.forms["registration"]["city"].value;
    var town = document.forms["registration"]["town"].value;
    var country = document.forms["registration"]["country"].value;
    var education = document.forms["registration"]["education"].value;
    var image = document.forms["registration"]["image"].value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

    if (fname == "" || fname.length < 4) {
        alert("First name must be filled out | 4 or more characters");
        return false;
    } else if (lname == "") {
        alert("Last name must be filled out");
        return false;
    } else if (gender[0].checked == false && form.gender[1].checked == false) {
        alert("Gender must be selected");
        return false;
    } else if (dob == "") {
        alert("Date of birth must be filled out");
        return false;
    } else if (age < 12) {
        alert("Age must be over 12");
        return false;
    } else if (email == "" || atpos < 1 || dotpos - atpos < 2) {
        alert("Email must be filled out | @someemail.com");
        return false;
    } else if (street == "") {
        alert("Street must be filled out");
        return false;
    } else if (city == "") {
        alert("City must be filled out");
        return false;
    } else if (town == "") {
        alert("Town must be filled out");
        return false;
    } else if (country == "") {
        alert("Country must be filled out");
        return false;
    } else if (education == "") {
        alert("Education must be filled out");
        return false;
    } else if (!allowedExtensions.exec(image)) {
        alert("Image must be selected");
        return false;
    } else {
        PlayersData.push(fname, lname, gender, dob, age, email, street, city, town, country, education, image);
        for (var i = 0; i < PlayersData.length; i++) {
            localStorage.setItem(i, PlayersData[i]);
        }
        console.log(PlayersData[0]);
        alert("Registration Successful");
        return true;
    }
}
