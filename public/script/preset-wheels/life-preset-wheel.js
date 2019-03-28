//----- Life Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addDialogueEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const Lifestyles = ["Lifestyles 1", "Lifestyles 2", "Lifestyles 3", "Lifestyles 4", "Lifestyles 5", "Lifestyles 6", "Lifestyles 7", "Lifestyles 8", "Lifestyles 9", "Lifestyles 10"];
let options = Lifestyles;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
