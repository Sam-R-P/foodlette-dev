//----- Mood Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addDialogueEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const MoodFoods = ["mood 1", "mood 2", "mood 3", "mood 4", "mood 5", "mood 6", "mood 7", "mood 8", "mood 9", "mood 10"];
let options = MoodFoods;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
