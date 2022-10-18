document.addEventListener("click", (e) => {
  if (e.target.closest(".js-open-spoiler")) {
    e.target.closest(".work__item")?.classList.toggle("work__item--opened");
  }
});
