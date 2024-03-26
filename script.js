function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

// Function to show the About Us content
function showAboutUsContent() {
    document.getElementById("about-us-content").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "none";
}

// Function to show the Signup form
function showSignupForm() {
    document.getElementById("about-us-content").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

// Function to show the Login form
function showLoginForm() {
    document.getElementById("about-us-content").style.display = "none";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Clear input fields
  document.getElementById("signup-username").value = "";
  document.getElementById("signup-password").value = "";
});

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Clear input fields
  document.getElementById("login-username").value = "";
  document.getElementById("login-password").value = "";
});

