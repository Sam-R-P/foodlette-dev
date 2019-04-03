//----- Nav & Dialogues Eventlisteners Javascript -----//
function addNavEventListeners() {
  //phUserProfile open profileBar
  document.getElementById("openProfileBar").addEventListener("click", openProfile);
  document.getElementById("closeProfileBar").addEventListener("click", closeProfile);
  //phNavButton open navigationBar
  document.getElementById("openNavBar").addEventListener("click", openNavMenu);
  document.getElementById("closeNavBar").addEventListener("click", closeNavMenu);
}

function openProfile() {
  document.getElementById("profileBar").style.right = "98px";
}

function closeProfile() {
  document.getElementById("profileBar").style.right = "-475px";
}

function openNavMenu() {
  document.getElementById("navBar").style.right = "0px";
}

function closeNavMenu() {
  document.getElementById("navBar").style.right = "-350px";
}
