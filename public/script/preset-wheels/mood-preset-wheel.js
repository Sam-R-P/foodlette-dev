//----- Mood Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const MoodFoods = ["Sushi", "Kebab", "Fast Food", "Chinese", "Indian", "Pizza", "Burger", "Chocolate", "Haribo", "Fudge"];
let options = MoodFoods;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
