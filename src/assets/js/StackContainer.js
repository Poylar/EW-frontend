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
        scrub: 0.4,
        start: "bottom 70%",
        end: "+=" + (panel.offsetHeight + 80),
        pin: true,
        pinSpacing: false,
        onRefresh: () => gsap.set(panel, { transformOrigin: "center " + (panel.offsetHeight - window.innerHeight / 2) + "px" }),
      },
    })
    .to(panel, { opacity: 0, scale: 0.7, transformOrigin: "center center" });
});
