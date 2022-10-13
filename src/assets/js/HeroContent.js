document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  const heroContentInner = document.querySelector(".hero-content-inner");
  const heroItem = document.querySelectorAll(".hero-content__item");
  heroItem.forEach((elem, index) => {
    if (heroItem.length < 3) {
      elem.style.width = `${heroContent.getBoundingClientRect().width / heroItem.length}px`;
      elem.style.height = `${heroContent.getBoundingClientRect().height / heroItem.length}px`;
    } else {
      elem.style.width = `${heroContent.getBoundingClientRect().width / heroItem.length + 100}px`;
    }
    const heroItemWidth = elem.getBoundingClientRect().width * heroItem.length - 1;
    const heroItemHeight = elem.getBoundingClientRect().height * heroItem.length - 1;

    const diffOverflowX = heroItemWidth - heroContentInner.getBoundingClientRect().width;
    const diffOverflowY = heroItemHeight - heroContentInner.getBoundingClientRect().height;

    const cardOffsetX = diffOverflowX / (heroItem.length - 1);
    const cardOffsetY = diffOverflowY / (heroItem.length - 1);
    
    const moveX = elem.getBoundingClientRect().width - cardOffsetX;
    const moveY = elem.getBoundingClientRect().height - cardOffsetY;

    elem.style.transform = `translate(${moveX * index}px ,-${moveY * index}px)`;
  });
});
