let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("container-slider__box");
  console.log(slides);
  if (n < 1) {
    slideIndex = slides.length;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(100%)";
  }

  slides[slideIndex - 1].style.transform = "translateX(0)";
}

export default sliderNav;
