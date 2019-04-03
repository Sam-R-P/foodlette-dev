//----- Country Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addDialogueEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const CountryCuisines = ["Roast", "Turkey", "Rice", "Curry", "Noodles", "Baguette", "Pizza", "Taco", "Pho", "Sushi"];
let options = CountryCuisines;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
