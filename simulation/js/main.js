const nextToStep1 = document.querySelector("#nextToStep1");
const mainStep = document.querySelector("#mainStep");
const simulationContainer = document.querySelector(".simulation-container");

// step 1
const step1 = document.querySelector("#step1");
const instructionsStep1 = document.querySelector("#instructionsStep1");

// images of step1
const png1Step1 = document.querySelector("#png1Step1");
// const png2Step1 = document.querySelector("#png2Step1");
const png3Step1 = document.querySelector("#png3Step1");


// gifs of step1
const gif1Step1 = document.querySelector("#gif1Step1");
const gif2Step1 = document.querySelector("#gif2Step1");

// transboxes of step1
const trans1Step1 = document.querySelector("#trans1Step1");
const trans2Step1 = document.querySelector("#trans2Step1");
const trans3Step1 = document.querySelector("#trans3Step1");

// arrows of step1
const arr1Step1 = document.querySelector("#arr1Step1");
const arr2Step1 = document.querySelector("#arr2Step1");
const arr3Step1 = document.querySelector("#arr3Step1");

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
    instructionsStep1.innerText = `Place a tray on the weighing balance. Press the TARE button. Using a trowel add about 200g of cement in the tray.`
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

    png3Step1.style.visibility = "visible";

    setTimeout(() => {
        trans3Step1.style.visibility = "visible";
        arr3Step1.style.visibility = "visible";
    }, 1000);
});

trans3Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png3Step1.style.visibility = "hidden";
    arr3Step1.style.visibility = "hidden";

    simulationContainer.style.backgroundColor = "#deebf7";
    gif2Step1.style.visibility = "visible";

    setTimeout(() => {
        nextToStep2.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 5500);
});

nextToStep2.addEventListener("click", (evt) => {
    window.location.href = "./steps-files/step2.html";
})