import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const header = document.querySelector(".header");

const showHeader = gsap.fromTo(
  header,
  {
    position: "absolute",
    y: -100,
  },
  {
    position: "fixed",
    y: 0,
  }
);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
  onUpdate: (self) => {},
});

window.addEventListener("scroll", (e) => {
  let nativeScrollVelocity = smoother.scrollTrigger.direction;
  nativeScrollVelocity === -1 ? showHeader.play() : showHeader.reverse();
});

smoother.effects(".section-title", {
  speed: 1.1,
});

export default smoother;
