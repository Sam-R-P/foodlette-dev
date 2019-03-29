//----- Nav & Dialogues Eventlisteners Javascript -----//


//--------- addNavEventListeners() &&& function addDialogueEventListeners() ----//
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
