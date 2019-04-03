//----- myWheels.HTML Javascript -----//
window.onload = loadScripts;

/**
 * On window load the function loadScripts() loads in the required functions for page interactivity to work
 */
function loadScripts() {
  addNavEventListeners();
  addWheelCreators();
}

/**
 * Adds eventlisteners for buttons to open and close the dialogue box as well as its intial options
 */
function addWheelCreators() {
  document.getElementById("createWheelButton").addEventListener("click", openWheelCreator);
  document.getElementById("creatorBoxClose").addEventListener("click", closeWheelCreator);
  document.getElementById("wheelTwoOptions").addEventListener("click", openTwoWheel);
  document.getElementById("wheelTenOptions").addEventListener("click", openTenWheel);
}

/**
 * Sets the CSS properties for HTML elements based in button interactions
 */
function openWheelCreator() {
  document.getElementById("creatorBox").style.display = "flex";
  document.getElementById("wheelFlavourText").style.display = "block";
  document.getElementById("wheelTwoOptions").style.display = "flex";
  document.getElementById("wheelTenOptions").style.display = "flex";
}

/**
 * Sets the CSS properties for HTML elements based in button interactions
 */
function closeWheelCreator() {
  document.getElementById("creatorBox").style.display = "none";
  document.getElementById("wheelTwoCreation").style.display = "none";
  document.getElementById("wheelTenCreation").style.display = "none";
}

/**
 * Sets the CSS properties for HTML elements based in button interactions
 */
function closeOptionButtons() {
  document.getElementById("wheelFlavourText").style.display = "none";
  document.getElementById("wheelTwoOptions").style.display = "none";
  document.getElementById("wheelTenOptions").style.display = "none";
}

/**
 * Sets the CSS properties for HTML elements based in button interactions
 */
function openTwoWheel() {
  closeOptionButtons();
  document.getElementById("wheelTwoCreation").style.display = "block";
}

/**
 * Sets the CSS properties for HTML elements based in button interactions
 */
function openTenWheel() {
  closeOptionButtons();
  document.getElementById("wheelTenCreation").style.display = "block";
}
