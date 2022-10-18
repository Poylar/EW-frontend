import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const panels = gsap.utils.toArray(".js-stack-container");
panels.pop();
panels.forEach((panel, i) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: panel,
      start: "bottom bottom",

      pinSpacing: false,
      pin: true,
      scrub: true,
      markers: true,
      onRefresh: () => gsap.set(panel, { transformOrigin: "center " + (panel.offsetHeight - window.innerHeight / 2) + "px" }),
    },
  });

  tl.fromTo(panel, 1, { y: 0, rotate: 0, scale: 1, opacity: 1 }, { y: 0, rotateX: 0, scale: 0.5 }, 0).to(panel, 0.1, { opacity: 0 });
});

const photos = gsap.utils.toArray(".js-scale-image");
photos.forEach((elem) => {
  gsap.set(elem, {
    scale: 1.1,
  });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: elem,
        scrub: 0.4,
        start: "bottom bottom",
      },
    })
    .to(elem, {
      scale: 1,
    });
});
