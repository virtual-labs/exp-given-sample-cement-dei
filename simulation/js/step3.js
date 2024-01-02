const step3 = document.querySelector("#step3");
const instructionsStep3 = document.querySelector("#instructionsStep3");
const simulationContainer = document.querySelector(".simulation-container");

const pngColor = "#dbe3e9", gifColor = "#deebf7";

// images
const png1Step3 = document.querySelector("#png1Step3");
const png2Step3 = document.querySelector("#png2Step3");

// gifs
const gif1Step3 = document.querySelector("#gif1Step3");
const gif2Step3 = document.querySelector("#gif2Step3");

// arrows
const arr1Step3 = document.querySelector("#arr1Step3");
const arr2Step3 = document.querySelector("#arr2Step3");

// transboxes
const trans1Step3 = document.querySelector("#trans1Step3");
const trans2Step3 = document.querySelector("#trans2Step3");

// next to step3
const arrNext = document.querySelector(".arr-next");
const nextToStep4 = document.querySelector("#nextToStep4");

addEventListener("DOMContentLoaded", (evt) => {
    step3.style.visibility = "visible";
    instructionsStep3.innerText = "Mix the water and cement to obtain a smooth paste of standard consistency.";
    simulationContainer.style.backgroundColor = pngColor;
    png1Step3.style.visibility = "visible";
    arr1Step3.style.visibility = "visible";
    trans1Step3.style.visibility = "visible";
});

trans1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step3.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";

    simulationContainer.style.backgroundColor = gifColor;
    gif1Step3.style.visibility = "visible";

    setTimeout(() => {
        gif1Step3.style.visibility = "hidden";
        png2Step3.style.visibility = "visible";
        simulationContainer.style.backgroundColor = pngColor;

    }, 7000);

    setTimeout(() => {
        trans2Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
    }, 8000);
});

trans2Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    png2Step3.style.visibility = "hidden";
    simulationContainer.style.backgroundColor = gifColor;

    gif2Step3.style.visibility = "visible";

    setTimeout(() => {
        nextToStep4.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 11000);
})

nextToStep4.addEventListener("click", (evt) => {
    window.location.href = "../steps-files/step4.html";
});