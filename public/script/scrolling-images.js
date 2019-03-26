//----- Scrolling Assets Javascript -----//

//----- Global Variables -----//
let x;
let slideIndex = 1;

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slideContainer");
  let dots = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" place-holder", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " place-holder";
}
