import { gsap } from "gsap";

document.addEventListener("click", (e) => {
  if (e.target.closest(".js-start-video")) {
    const icon = e.target.closest(".js-start-video").querySelector(".video__play");
    const video = e.target.closest(".js-start-video").querySelector(".video__src");
    video.muted = !video.muted;
    // gsap.to(icon, {
    //   x: (video.offsetWidth - 80 - icon.offsetWidth) / 2,
    //   y: (video.offsetHeight - 80 - icon.offsetHeight) / 2,
    //   scale: 0.8,
    // });
  }
});
