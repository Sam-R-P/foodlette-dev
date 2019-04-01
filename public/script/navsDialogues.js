//----- Nav & Dialogues Eventlisteners Javascript -----//


function addNavEventListeners() {
  //phUserProfile open profileBar
  document.getElementById("openProfileBar").addEventListener("click", openProfile);
  document.getElementById("closeProfileBar").addEventListener("click", closeProfile);
  document.getElementById("openLogin").addEventListener("click", openProfileLogin);
  document.getElementById("openCreateAccount").addEventListener("click", openProfileCreateAccount);
  //phNavButton open navigationBar
  document.getElementById("openNavBar").addEventListener("click", openNavMenu);
  document.getElementById("closeNavBar").addEventListener("click", closeNavMenu);
}

function addDialogueEventListeners() {
  //onload Box
  document.getElementById("onloadClose").addEventListener("click", closeBox);
  document.getElementById("guest").addEventListener("click", closeBox);
  document.getElementById("createAccount").addEventListener("click", openCreateAccount);
  document.getElementById("loginHereText").addEventListener("click", openLogin);
}

//---------- &&& function openProfile() &&& function closeProfile() --------------//

function load() {
  document.getElementById('onloadBox').style.display="block";
}

function closeBox() {
  closeDefault();
  document.getElementById("onloadBox").style.display = "none";
}

function openCreateAccount() {
  closeDefault();
  document.getElementById("createAccountForm").style.display = "block";
}

function openLogin() {
  closeDefault();
  document.getElementById("loginForm").style.display = "block";
}

//-----//

function closeDefault() {
  document.getElementById("flavourText").style.display = "none";
  document.getElementById("guest").style.display = "none";
  document.getElementById("createAccount").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("createAccountForm").style.display = "none";
}


function openProfile() {
  document.getElementById("profileBar").style.right = "98px";
}

function closeProfile() {
  document.getElementById("profileBar").style.right = "-350px";
}


function openNavMenu() {
  document.getElementById("navBar").style.right = "0px";
}

function closeNavMenu() {
  document.getElementById("navBar").style.right = "-350px";
}

function openProfileLogin() {
    document.getElementById('onloadBox').style.display="flex";
    openLogin();
}

function openProfileCreateAccount() {
    document.getElementById('onloadBox').style.display="flex";
    openCreateAccount();
}
