// Logic for mobile menu
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const main = document.getElementById('main');

let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");

function styleX() {	
  bar1.style.transform = "rotate(45deg) translate(.6em, 0)";
  bar2.hidden = true;
  bar3.style.transform = "rotate(-45deg) translate(.6em, 0)";
}

function styleBurger() {
  bar1.style.transform = "none";
  bar2.hidden = false;
  bar3.style.transform = "none";
}

// Logic for hamburger to X menu animation
toggleButton.addEventListener("click", () => {
  if(navbarLinks.classList.toggle("active")) {
    styleX();
  }
  else {
    styleBurger();
  }
});

// Closes hamburger menu when clicking outside the nav
main.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  styleBurger();
});