//----- Pizza Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const PremirePizza = ["Pizza", "Spaghetti", "Ice Cream", "comfort 4", "comfort 5", "comfort 6", "comfort 7", "comfort 8", "comfort 9", "comfort 10"];

/**
 * Sets the value from the array as the values to be used on the roulette wheel
 */
let options = PremirePizza;

/**
 * Adds eventlistener for the spin button
 */
function addWheelEventListeners() {
  document.getElementById("spin").addEventListener("click", spin);
}
