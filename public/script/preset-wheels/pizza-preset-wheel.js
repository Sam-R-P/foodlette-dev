//----- Pizza Preset Wheel Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addWheelEventListeners();
  drawRouletteWheel();
}

//WHEELS//
const PremirePizza = ["Pineapple", "Meat", "Spicy", "Margherita", "Pepperoni", "Chicken", "Meatball", "Stuffed Crust", "Thin Crust", "Vegetarian"];

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
