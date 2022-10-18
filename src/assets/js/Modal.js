import { gsap } from "gsap";
import smoother from "./SmoothScroll";
const modalTrigger = ".js-open-modal";
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
let isOpen = false;
const tl = gsap.timeline({ paused: true });
const openModal = tl.fromTo(
  modalWrapper,
  {
    display: "none",
    opacity: 0,
  },
  {
    display: "block",
    opacity: 1,
  }
);
tl.fromTo(
  modal,
  {
    marginTop: -100,
  },
  {
    marginTop: 0,
  },
  "<"
);
document.addEventListener("click", (e) => {
  if (!isOpen && e.target.closest(modalTrigger)) {
    openModal.play();
    isOpen = true;
    smoother.paused(true);
  } else if (isOpen && !e.target.closest(".modal") || isOpen && e.target.closest('.modal__close')) {
    openModal.reverse();
    isOpen = false;
    smoother.paused(false);
  }
});
