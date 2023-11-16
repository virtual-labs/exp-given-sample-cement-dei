const nextToStep1 = document.querySelector("#nextToStep1");
const mainStep = document.querySelector("#mainStep");
const simulationContainer = document.querySelector(".simulation-container");

// step 1
const step1 = document.querySelector("#step1");
const instructionsStep1 = document.querySelector("#instructionsStep1");

// images of step1
const png1Step1 = document.querySelector("#png1Step1");
const png2Step1 = document.querySelector("#png2Step1");


// gifs of step1
const gif1Step1 = document.querySelector("#gif1Step1");

// transboxes of step1
const trans1Step1 = document.querySelector("#trans1Step1");
const trans2Step1 = document.querySelector("#trans2Step1");


// arrows of step1
const arr1Step1 = document.querySelector("#arr1Step1");
const arr2Step1 = document.querySelector("#arr2Step1");

// next to step2
const nextToStep2 = document.querySelector("#nextToStep2");
const arrNext = document.querySelector(".arr-next");


addEventListener("DOMContentLoaded", (evt) => {
    nextToStep1.style.visibility = "visible";
    simulationContainer.style.backgroundColor = "#deebf7";
});

nextToStep1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    mainStep.style.visibility = "hidden";
    simulationContainer.style.backgroundColor = "#dbe3e9";
    step1.style.visibility = "visible";
    instructionsStep1.textContent = "content...";
    png1Step1.style.visibility = "visible";
    trans1Step1.style.visibility = "visible";
    arr1Step1.style.visibility = "visible";
});

trans1Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    png1Step1.style.visibility = "hidden";
    gif1Step1.style.visibility = "visible";
    setTimeout(() => {
        trans2Step1.style.visibility = "visible";
        arr2Step1.style.visibility = "visible";
    }, 3000);
});

trans2Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step1.style.visibility = "hidden";
    gif1Step1.style.visibility = "hidden";

    png2Step1.style.visibility = "visible";

    setTimeout(() => {
        arrNext.style.visibility = "visible";
        nextToStep2.style.visibility = "visible";
    }, 1000);
});

nextToStep2.addEventListener("click", (evt) => {
    window.location.href = "./steps-files/step2.html";
})