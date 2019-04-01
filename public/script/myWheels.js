//----- myWheels.HTML Javascript -----//
window.onload = loadScripts;

function loadScripts() {
  addNavEventListeners();
  addDialogueEventListeners();
  addWheelCreators();
}

function addWheelCreators() {
  document.getElementById("createWheelButton").addEventListener("click", openWheelCreator);
  document.getElementById("creatorBoxClose").addEventListener("click", closeWheelCreator);
  document.getElementById("wheelTwoOptions").addEventListener("click", openTwoWheel);
  document.getElementById("wheelTenOptions").addEventListener("click", openTenWheel);
}

function openWheelCreator() {
  document.getElementById("creatorBox").style.display = "flex";
  document.getElementById("wheelFlavourText").style.display = "block";
  document.getElementById("wheelTwoOptions").style.display = "flex";
  document.getElementById("wheelTenOptions").style.display = "flex";
}

function closeWheelCreator() {
  document.getElementById("creatorBox").style.display = "none";
  document.getElementById("wheelTwoCreation").style.display = "none";
  document.getElementById("wheelTenCreation").style.display = "none";
}

function closeOptionButtons() {
  document.getElementById("wheelFlavourText").style.display = "none";
  document.getElementById("wheelTwoOptions").style.display = "none";
  document.getElementById("wheelTenOptions").style.display = "none";
}

function openTwoWheel() {
  closeOptionButtons();
  document.getElementById("wheelTwoCreation").style.display = "block";
}

function openTenWheel() {
  closeOptionButtons();
  document.getElementById("wheelTenCreation").style.display = "block";
}
