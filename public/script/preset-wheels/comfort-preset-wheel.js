//----- Comfort Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const ComfortCreations = ["Pizza", "Spaghetti", "Ice Cream", "Lasagne", "Cake", "Macaroni Cheese", "Meatloaf", "Kebab", "Pie", "Biscuits"];

/**
 * Sets the value from the array as the values to be used on the roulette wheel
 */
let options = ComfortCreations;

/**
 * Adds eventlistener for the spin button
 */
function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
