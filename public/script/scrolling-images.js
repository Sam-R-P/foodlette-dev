//----- Scrolling Assets Javascript -----//

//----- Global Variables -----//

let x;
let slideIndex = 1;

/**
* Is called using an "onclick" method attached to a HTML circle used for navigation of menus. Calls a further function to update the UI.
* @param {number} n The number submitted when a HTML navigation circle is clicked, telling the script which menu to open.
*/
function currentDiv(n) {
  showDivs(slideIndex = n);
}

/**
* Is called on the page load via the loadScripts function located in index.js. The function shows a specific 'slide' containing menus.
* @param {number} n The number used to determine what slide the UI should open the menu on.
*/
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
