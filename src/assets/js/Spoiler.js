document.addEventListener("click", (e) => {
  if (e.target.closest(".js-open-modal")) {
    e.target.closest(".work__item")?.classList.toggle("work__item--opened");
  }
});
