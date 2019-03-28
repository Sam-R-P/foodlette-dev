//----- Sweet Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addDialogueEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const SweetTreats = ["sweet 1", "sweet 2", "sweet 3", "sweet 4", "sweet 5", "sweet 6", "sweet 7", "sweet 8", "sweet 9", "sweet 10"];
let options = SweetTreats;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
