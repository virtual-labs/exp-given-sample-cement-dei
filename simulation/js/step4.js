const step4 = document.querySelector("#step4");
const instructionsStep4 = document.querySelector("#instructionsStep4");

const simulationContainer = document.querySelector(".simulation-container");
const pngColor = "#dbe3e9", gifColor = "#deebf7";

const png1Step4 = document.querySelector("#png1Step4");
const png2Step4 = document.querySelector("#png2Step4");
const png3Step4 = document.querySelector("#png3Step4");
const png4Step4 = document.querySelector("#png4Step4");
const png5Step4 = document.querySelector("#png5Step4");
const png6Step4 = document.querySelector("#png6Step4");

const gif1Step4 = document.querySelector("#gif1Step4");
const gif2Step4 = document.querySelector("#gif2Step4");
const gif3Step4 = document.querySelector("#gif3Step4");
const gif4Step4 = document.querySelector("#gif4Step4");
const gif5Step4 = document.querySelector("#gif5Step4");
const gif6Step4 = document.querySelector("#gif6Step4");

const trans1Step4 = document.querySelector("#trans1Step4");
const trans2Step4 = document.querySelector("#trans2Step4");
const trans3Step4 = document.querySelector("#trans3Step4");
const trans4Step4 = document.querySelector("#trans4Step4");
const trans5Step4 = document.querySelector("#trans5Step4");
const trans6Step4 = document.querySelector("#trans6Step4");
// const trans7Step4 = document.querySelector("#trans7Step4");

const arr1Step4 = document.querySelector("#arr1Step4");
const arr2Step4 = document.querySelector("#arr2Step4");
const arr3Step4 = document.querySelector("#arr3Step4");
const arr4Step4 = document.querySelector("#arr4Step4");
const arr5Step4 = document.querySelector("#arr5Step4");
const arr6Step4 = document.querySelector("#arr6Step4");
// const arr7Step4 = document.querySelector("#arr7Step4");

const nextToStep5 = document.querySelector("#nextToStep5");

const arrNext = document.querySelector(".arr-next");

addEventListener("DOMContentLoaded", (evt) => {
    step4.style.visibility = "visible";
    instructionsStep4.innerText = "Gently apply oil to the inner part of the Le- Chatelier's mould. Pace the apparatus on the glass plate.";
    simulationContainer.style.backgroundColor = pngColor;
    png1Step4.style.visibility = "visible";
    arr1Step4.style.visibility = "visible";
    trans1Step4.style.visibility = "visible";
});

trans1Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step4.style.visibility = "hidden";
    png1Step4.style.visibility = "hidden";

    simulationContainer.style.backgroundColor = gifColor;
    gif1Step4.style.visibility = "visible";

    setTimeout(() => {
        gif1Step4.style.visibility = "hidden";
        simulationContainer.style.backgroundColor = pngColor;
        png2Step4.style.visibility = "visible";

        trans2Step4.style.visibility = "visible";
        arr2Step4.style.visibility = "visible";
    }, 7000);
});

trans2Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step4.style.visibility = "hidden";
    png2Step4.style.visibility = "hidden";

    simulationContainer.style.backgroundColor = gifColor;
    gif2Step4.style.visibility = "visible";

    setTimeout(() => {
        gif2Step4.style.visibility = 'hidden';
        simulationContainer.style.backgroundColor = pngColor;

        instructionsStep4.innerText = "Fill the mould with the prepared cement paste. Remove excess cement from the top and obtain a smooth finish. Cover the mould with another glass plate and put a small weight on top of this arrangement.";
        
        png3Step4.style.visibility = "visible";

        trans3Step4.style.visibility = "visible";
        arr3Step4.style.visibility = "visible";
    }, 6000);
});

trans3Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step4.style.visibility = "hidden";
    png3Step4.style.visibility = "hidden";

    simulationContainer.style.backgroundColor = gifColor;
    gif3Step4.style.visibility = "visible";

    setTimeout(() => {
        gif3Step4.style.visibility = 'hidden';
        simulationContainer.style.backgroundColor = pngColor;
        png4Step4.style.visibility = "visible";

        trans4Step4.style.visibility = "visible";
        arr4Step4.style.visibility = "visible";
    }, 6000);
});

trans4Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step4.style.visibility = "hidden";
    png4Step4.style.visibility = "hidden";

    simulationContainer.style.backgroundColor = gifColor;
    gif4Step4.style.visibility = "visible";

    setTimeout(() => {
        gif4Step4.style.visibility = 'hidden';
        simulationContainer.style.backgroundColor = pngColor;
        png5Step4.style.visibility = "visible";

        trans5Step4.style.visibility = "visible";
        arr5Step4.style.visibility = "visible";
    }, 6000);
});

trans5Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step4.style.visibility = "hidden";
    png5Step4.style.visibility = "hidden";

    simulationContainer.style.backgroundColor = gifColor;
    gif5Step4.style.visibility = "visible";

    setTimeout(() => {
        gif5Step4.style.visibility = 'hidden';
        simulationContainer.style.backgroundColor = pngColor;

        png6Step4.style.visibility = "visible";
        trans6Step4.style.visibility = "visible";
        arr6Step4.style.visibility = "visible";
    }, 3000);
});

trans6Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step4.style.visibility = "hidden";
    png6Step4.style.visibility = "hidden";

    simulationContainer.style.backgroundColor = gifColor;
    gif6Step4.style.visibility = "visible";

    setTimeout(() => {
        nextToStep5.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3000);
});

nextToStep5.addEventListener("click", (evt) => {
    window.location.href = "../steps-files/step5.html";
})