const step5 = document.querySelector("#step5");
const instructionsStep5 = document.querySelector("#instructionsStep5");

const simulationContainer = document.querySelector(".simulation-container");
const pngColor = "#dbe3e9", gifColor = "#deebf7";

const png1Step5 = document.querySelector("#png1Step5");
const png2Step5 = document.querySelector("#png2Step5");
const png3Step5 = document.querySelector("#png3Step5");

const gif1Step5 = document.querySelector("#gif1Step5");
const gif2Step5 = document.querySelector("#gif2Step5");
const gif3Step5 = document.querySelector("#gif3Step5");

const trans1Step5 = document.querySelector("#trans1Step5");
const trans2Step5 = document.querySelector("#trans2Step5");
const trans3Step5 = document.querySelector("#trans3Step5");

const arr1Step5 = document.querySelector("#arr1Step5");
const arr2Step5 = document.querySelector("#arr2Step5");
const arr3Step5 = document.querySelector("#arr3Step5");

const nextToStep6 = document.querySelector("#nextToStep6");

const arrNext = document.querySelector(".arr-next");

addEventListener("DOMContentLoaded", (evt) => {
    step5.style.visibility = "visible";
    instructionsStep5.innerText = "Immerse the Le Chatelier’s apparatus, cement and glass plate assembly inside a water tank for about 24 hours at a temperature of 27 ± 2° C.";
    simulationContainer.style.backgroundColor = pngColor;
    png1Step5.style.visibility = "visible";
    arr1Step5.style.visibility = "visible";
    trans1Step5.style.visibility = "visible";
});

trans1Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step5.style.visibility = "hidden";
    png1Step5.style.visibility = "hidden"
    
    simulationContainer.style.backgroundColor = gifColor;
    gif1Step5.style.visibility = "visible"

    setTimeout(() => {
        gif1Step5.style.visibility = "hidden";

        instructionsStep5.innerText = `Remove the assembly from the tank after 24 hours and measure the distance between the two indicators of the Le Chatelier's apparatus.`
        
        simulationContainer.style.backgroundColor = pngColor;
        png2Step5.style.visibility = "visible"
        trans2Step5.style.visibility = "visible"
        arr2Step5.style.visibility = "visible"
    }, 3000);
});

trans2Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step5.style.visibility = "hidden";
    png2Step5.style.visibility = "hidden"
    
    simulationContainer.style.backgroundColor = gifColor;
    gif2Step5.style.visibility = "visible"

    setTimeout(() => {
        gif2Step5.style.visibility = "hidden";

        simulationContainer.style.backgroundColor = pngColor;
        png3Step5.style.visibility = "visible"
        trans3Step5.style.visibility = "visible"
        arr3Step5.style.visibility = "visible"
    }, 3000);
});

trans3Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step5.style.visibility = "hidden";
    png3Step5.style.visibility = "hidden"
    
    simulationContainer.style.backgroundColor = gifColor;
    gif3Step5.style.visibility = "visible"

    setTimeout(() => {
        nextToStep6.style.visibility = "visible"
        arrNext.style.visibility = "visible"
    }, 3500);
});

nextToStep6.addEventListener("click", (evt) => {
    window.location.href = "../steps-files/step6.html";
});