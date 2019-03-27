window.onload = loadScripts;

/**
 * One window load the function loadScripts() loads in the required functions for page interactivity to work
 */
function loadScripts() {
    //addNavEventListeners();
    //addDialogueEventListeners();
    addWheelEventListeners();
    drawRouletteWheel();
    showDivs(1);
}

//WHEELS//
const WelcomeRoulette = ["lette", "Choose", "A", "Wheel", "And", "Spin", "It", "Welcome", "To", "Food"];

let options = WelcomeRoulette;



function addWheelEventListeners() {
    //wheel
    document.getElementById("spin").addEventListener("click", spin);
}
