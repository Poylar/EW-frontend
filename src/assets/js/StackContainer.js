import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { breakpoints, mm } from "./MatchMedia";
gsap.registerPlugin(ScrollTrigger);

mm.add(breakpoints.isDesktop, () => {
  const panels = gsap.utils.toArray(".js-stack-container");
  panels.pop();
  panels.forEach((panel, i) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: panel,
        start: "bottom bottom",
        end: "+=" + panel.offsetHeight * (i + 1),
        pinSpacing: false,
        pin: false,
        scrub: true,
        markers: true,
        onRefresh: () => gsap.set(panel, { transformOrigin: "center " + (panel.offsetHeight - window.innerHeight / 2) + "px" }),
      },
    });

    tl.fromTo(panel, { y: 0, rotate: 0, scale: 1, opacity: 1 }, { y: (panel.offsetHeight / 100) * 25, scale: 0.9 }, 0).to(panel, 0.1, {
      opacity: 1,
    });
  });
});
