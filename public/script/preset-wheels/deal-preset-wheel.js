//----- Deal Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addDialogueEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const DelightfulDeals = ["delight 1", "delight 2", "delight 3", "delight 4", "delight 5", "delight 6", "delight 7", "delight 8", "delight 9", "delight 10"];
let options = DelightfulDeals;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
