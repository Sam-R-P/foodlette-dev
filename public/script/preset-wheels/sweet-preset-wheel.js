//----- Sweet Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const SweetTreats = ["Ice Cream", "Fudge Cake", "Smarties", "Haribo", "Raspberries", "Sherbert", "Pancakes", "Mars bar", "Galaxy", "Cadbury"];
let options = SweetTreats;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
