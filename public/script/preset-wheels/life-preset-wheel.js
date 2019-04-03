//----- Life Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const Lifestyles = ["Gluten Free", "Pescatarian", "Vegetarian", "Vegan", "Low Fat", "Lactose Free", "Carnivore", "Sugar Free", "Halal", "Keto"];
let options = Lifestyles;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
