//----- Deal Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const DelightfulDeals = ["Dominos", "McDonalds", "KFC", "Subway", "Burger King", "Meal Deal", "Giraffe", "Spoons", "Meerkat Meals", "Groupon"];
let options = DelightfulDeals;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
