//----- Comfort Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addDialogueEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const ComfortCreations = ["comfort 1", "comfort 2", "comfort 3", "comfort 4", "comfort 5", "comfort 6", "comfort 7", "comfort 8", "comfort 9", "comfort 10"];
let options = ComfortCreations;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
