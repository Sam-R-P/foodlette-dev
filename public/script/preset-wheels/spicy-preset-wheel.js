//----- Spicy Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addDialogueEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const SpicySensations = ["spicy 1", "spicy 2", "spicy 3", "spicy 4", "spicy 5", "spicy 6", "spicy 7", "spicy 8", "spicy 9", "spicy 10"];
let options = SpicySensations;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
