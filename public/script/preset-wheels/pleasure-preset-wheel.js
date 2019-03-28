//----- Pleasure Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addDialogueEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const GuiltyPleasures = ["guilty 1", "guilty 2", "guilty 3", "guilty 4", "guilty 5", "guilty 6", "guilty 7", "guilty 8", "guilty 9", "guilty 10"];
let options = GuiltyPleasures;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
