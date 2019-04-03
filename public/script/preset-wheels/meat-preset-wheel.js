//----- Meat Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const MeatFeasts = ["Pork", "Beef", "Lamb", "Chicken", "Turkey", "Venison", "Duck", "Bison", "Rabbit", "Goose"];
let options = MeatFeasts;

function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
