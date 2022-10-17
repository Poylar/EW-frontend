import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const panels = gsap.utils.toArray(".js-stack-container");
panels.pop();
panels.forEach((panel, i) => {
  var tl = gsap
    .timeline({
      scale: 0.8,
      scrollTrigger: {
        trigger: panel,
        scrub: 0.3,
        start: "bottom bottom",
        end: "+=" + panel.offsetHeight,
        pin: i === panels.length ? false : true,
        pinSpacing: false,
        onRefresh: () => gsap.set(panel, { transformOrigin: "center " + (panel.offsetHeight - window.innerHeight / 2) + "px" }),
      },
    })
    .to(panel, { scale: 0.9, y: 80, transformOrigin: "bottom center" });
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
