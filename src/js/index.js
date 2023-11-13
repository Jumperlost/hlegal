//for example
// import mobileNav from "./modules/mobile-nav.js";
// mobileNav();

import sliderNav from "./modules/slider-nav.js";
sliderNav();

document.getElementById("scroll-down").addEventListener("click", function () {
  let tabMenu = document.getElementById("tab1");
  let targetOffsen = tabMenu.offsetTop;
  console.log(tabMenu);
  window.scrollTo({
    top: targetOffsen,
    behavior: "smooth",
  });
});
