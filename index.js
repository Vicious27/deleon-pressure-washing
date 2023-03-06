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

// Logic for carousel
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll("#reviews i");

let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;

//shows and hides prev/next icons according to carousel scroll left value
const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach( icon => {
  icon.addEventListener("click", () => {
    //gets first img width & adds 14 margin value
    let firstImgWidth = firstImg.clientWidth + 14;
    //if icon left is clicked, reduce width value from the carousel scroll left, else it adds to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const dragging = (e) => {
  //scrolling images/carousel to left according to mouse pointer
  if(!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX)  - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
}

const dragStart = (e) => {
  //updates global variables value on mousedown event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);

carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);