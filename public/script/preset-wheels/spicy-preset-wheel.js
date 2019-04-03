//----- Spicy Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const SpicySensations = ["Hot Wings", "Chilli", "Salsa", "Stuffed Chilli", "Vindaloo", "Phall", "Chilli Carni", "Mandras", "Chilli Beef", "Spicy Rice"];
let options = SpicySensations;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
