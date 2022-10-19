import { gsap } from "gsap";
import smoother from "./SmoothScroll";
const mobileBtn = document.querySelector(".js-open-nav");
const menu = document.querySelector(".mobile-nav-wrapper");
let state = false;
const tl = gsap.timeline({ paused: true });

tl.fromTo(
  menu,
  {
    display: "none",
    y: -900,
  },
  {
    duration: 0.4,
    display: "block",
    y: 0,
  }
);
function openMenu() {
  tl.play();
  smoother.paused(true);
  document.querySelector(".header").classList.add("header--black");
  mobileBtn.classList.add("opened");
  state = true;
}
function closeMenu() {
  tl.reverse();
  smoother.paused(false);
  document.querySelector(".header").classList.remove("header--black");
  mobileBtn.classList.remove("opened");
  state = false;
}

document.addEventListener("click", (e) => {
  if ((state && e.target.closest(".js-open-nav")) || (state && !e.target.closest(".mobile-nav-wrapper"))) {
    closeMenu();
  } else if (e.target.closest(".js-open-nav")) {
    openMenu();
  }
});
