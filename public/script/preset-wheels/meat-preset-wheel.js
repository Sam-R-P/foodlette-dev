//----- Meat Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addDialogueEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const MeatFeasts = ["meat 1", "meat 2", "meat 3", "meat 4", "meat 5", "meat 6", "meat 7", "meat 8", "meat 9", "meat 10"];
let options = MeatFeasts;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
