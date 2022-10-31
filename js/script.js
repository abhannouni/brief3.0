let openMenu = document.querySelector(".burger");
let closeMenu = document.querySelector(".close-menu");

let navMenu = document.querySelector("nav");

openMenu.addEventListener("click", openNavMenu);
closeMenu.addEventListener("click", closeNavMenu);

function openNavMenu() {
  navMenu.classList.add('nav-active');
}
function closeNavMenu() {
  navMenu.classList.remove('nav-active');
}
