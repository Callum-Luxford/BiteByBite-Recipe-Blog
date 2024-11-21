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

// AUTO-TYPE EFFECT
var typed = new Typed("#auto-type", {
  strings: ["BiteByBite^4000"],
  typeSpeed: 70,
  loop: true,
  loopCount: Infinity,
  backSpeed: 70,
  startDelay: 0,
});
// AUTO-TYPE EFFECT

// SCROLL-REVEAL
// // Scroll reveal animation control
const sr = ScrollReveal({
  origin: "top",
  distance: "10px",
  duration: 1000,
  delay: 500,
  reset: true,
  startDelay: 1000,
});

// HOME REVEAL
sr.reveal(`#home-reveal-h1`, { origin: "left", delay: 600});
sr.reveal(`#home-reveal-p`, { origin: "left", delay: 700 });
sr.reveal(`.hero__buttons`, { origin: "right", delay: 800});
sr.reveal(`.hero__image`, { origin: "right", delay: 900});
// sr.reveal(`.category__container`, { origin: "bottom", delay: 1000, distance: '30px' });

// ABOUT REVEAL

// SCROLL-REVEAL

