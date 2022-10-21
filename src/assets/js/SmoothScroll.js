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
gsap.to(header, { duration: 0.1, y: 0 });
let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
  onUpdate: (self) => {
    let smoothDirection = self.getVelocity() < 0 ? -1 : 1;
    if (self.scrollTop() > 200) {
      smoothDirection === -1 ? showHeader.play() : showHeader.reverse();
    }
  },
});

const video = document.querySelector(".js-start-video");
const gap = getComputedStyle(document.body).getPropertyValue("--gap");
const tl1 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero-video",
      start: "top top",
      end: "bottom",
      scrub: true,

      pin: true,
      pinType: "transform",
    },
  })
  .to(video, {
    delay: 0.2,
    padding: 0,
    duration: 2,
    transformOrigin: "center center",
  })
  .to({}, { duration: 2 });

const tl2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".features__icon",
      start: "top center",
      end: "bottom",
      scrub: true,
      pin: false,


      markers: true,
    },
  })
  .to(".features__src", {
    rotate: 360,
  });

export default smoother;
