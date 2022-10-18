import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const showAnim = gsap
  .from(".header", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

const header = document.querySelector(".header");
let showHeader = false;
let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
  onUpdate: (self) => {
    
  },
});
let nativeScrollVelocity = smoother.scrollTrigger.direction;
window.addEventListener("scroll", (e) => {
  console.log(nativeScrollVelocity);
});

smoother.effects("img", { speed: "auto" });

smoother.effects(".section-title", {
  speed: 1.1,
});
