const step6 = document.querySelector("#step6");
const instructionsStep6 = document.querySelector("#instructionsStep6");

const simulationContainer = document.querySelector(".simulation-container");
const pngColor = "#dbe3e9", gifColor = "#deebf7";

const png1Step6 = document.querySelector("#png1Step6");
const png2Step6 = document.querySelector("#png2Step6");
const png3Step6 = document.querySelector("#png3Step6");

const gif1Step6 = document.querySelector("#gif1Step6");
const gif2Step6 = document.querySelector("#gif2Step6");

const trans1Step6 = document.querySelector("#trans1Step6");
const trans2Step6 = document.querySelector("#trans2Step6");


const arr1Step6 = document.querySelector("#arr1Step6");
const arr2Step6 = document.querySelector("#arr2Step6");

const nextToStep7 = document.querySelector("#nextToStep7");

const arrNext = document.querySelector(".arr-next");

addEventListener("DOMContentLoaded", (evt) => {
    step6.style.visibility = "visible";
    instructionsStep6.innerText = "Now, immerse the Le Chatelier's setup in the water tank at boiling temperature for about 3 hours.";
    simulationContainer.style.backgroundColor = pngColor;
    png1Step6.style.visibility = "visible";
    arr1Step6.style.visibility = "visible";
    trans1Step6.style.visibility = "visible";
});

trans1Step6.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step6.style.visibility = "hidden";
    png1Step6.style.visibility = "hidden"
    
    simulationContainer.style.backgroundColor = gifColor;
    gif1Step6.style.visibility = "visible"

    setTimeout(() => {
        gif1Step6.style.visibility = "hidden";

        simulationContainer.style.backgroundColor = pngColor;

        instructionsStep6.innerText = `Remove the assembly from the boiling water  and measure the distance between the two indicators of the apparatus.`

        png2Step6.style.visibility = "visible"
    }, 4500);

    setTimeout(() => {
        png2Step6.style.visibility = "hidden"

        png3Step6.style.visibility = "visible"
        trans2Step6.style.visibility = "visible"
        arr2Step6.style.visibility = "visible"
    }, 8000);
});

trans2Step6.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step6.style.visibility = "hidden";
    png2Step6.style.visibility = "hidden"
    
    simulationContainer.style.backgroundColor = gifColor;
    gif2Step6.style.visibility = "visible"

    setTimeout(() => {
        nextToStep7.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3000);
});

nextToStep7.addEventListener("click", (evt) => {
    window.location.href = "../steps-files/step7.html";
})