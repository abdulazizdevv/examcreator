let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// caroucel 3
let slideIndex3 = 1;
showSlidess(slideIndex3);

function plusSlidee(x) {
  showSlidess((slideIndex3 += x));
}

function currentSlide(x) {
  showSlidess((slideIndex3 = x));
}

function showSlidess(x) {
  let i;
  let slides0 = document.getElementsByClassName("slide");
  let dott = document.getElementsByClassName("dot");
  if (x > slides0.length) {
    slideIndex3 = 1;
  }
  if (x < 1) {
    slideIndex = slides0.length;
  }
  for (i = 0; i < slides0.length; i++) {
    slides0[i].style.display = "none";
  }
  for (i = 0; i < dott.length; i++) {
    dott[i].className = dott[i].className.replace(" active", "");
  }
  slides0[slideIndex3 - 1].style.display = "block";
  dott[slideIndex3 - 1].className += " active";
}
// carousel 2
let slideIndex2 = 1;
showSlide(slideIndex2);

function plusSlide(a) {
  showSlide((slideIndex2 += a));
}

function currentSlides(a) {
  showSlide((slideIndex2 = a));
}

function showSlide(a) {
  let z;
  let slides2 = document.getElementsByClassName("slidex2");
  let dot = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (a > slides2.length) {
    slideIndex2 = 1;
  }
  if (a < 1) {
    slideIndex2 = slides2.length;
  }
  for (z = 0; z < slides2.length; z++) {
    slides2[z].style.display = "none";
  }
  for (z = 0; z < dot.length; z++) {
    dot[z].className = dot[z].className.replace(" zero", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dot[slideIndex2 - 1].className += " zero";
  captionText.innerHTML = dot[slideIndex2 - 1].alt;
}

// accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// toggll

const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  all = body.querySelector(".all"),
  toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});




window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.padding = "10px 10px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
  }
}
window.addEventListener("scroll", (event) => {
  if (window.scrollY > 300) {
    document.querySelector(".backtop").style.display = "block";
  } else {
    document.querySelector(".backtop").style.display = "none";
  }
  return event;
});