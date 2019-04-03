//----- Pleasure Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const GuiltyPleasures = ["Fudge", "Cookie Dough", "Cheese", "Cheese Cake", "Chocolate", "Sticky Toffee", "Bakery", "Dough Balls", "Pancakes", "Waffles"];
let options = GuiltyPleasures;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
