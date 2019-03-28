//----- Country Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addDialogueEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const CountryCuisines = ["country 1", "country 2", "country 3", "country 4", "country 5", "country 6", "country 7", "country 8", "country 9", "country 10"];
let options = CountryCuisines;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
