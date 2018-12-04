let slideIndex = 1;

function showSlides(n) {

  let slides = document.getElementsByClassName("blogSlides");
  let dots = document.getElementsByClassName("blogSlider__dots--dot");

  n > slides.length ? slideIndex = 1: n < slideIndex? slideIndex = slides.length: slideIndex = n;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


showSlides(slideIndex);