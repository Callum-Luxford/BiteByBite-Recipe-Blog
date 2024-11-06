// MOBILE NAV
const menu = document.querySelector(".menu__button");
const nav_list = document.querySelector(".nav__list");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  nav_list.classList.toggle("open");
});

document.querySelectorAll(".nav__link").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    nav_list.classList.remove("open");
  })
);
// MOBILE NAV

// BUTTON
const expBtn = document.querySelector(".explore__btn");
const randBtn = document.querySelector(".random__btn");

expBtn.classList.add("effect");
randBtn.addEventListener("mouseover", () => {
  randBtn.classList.add("effect");
  expBtn.classList.remove("effect");

  randBtn.addEventListener("mouseout", () => {
    randBtn.classList.remove("effect");
    expBtn.classList.add("effect");
  });
});
// BUTTON


