const step2 = document.querySelector("#step2");
const instructionsStep2 = document.querySelector("#instructionsStep2");
const simulationContainer = document.querySelector(".simulation-container");


// images
const png1Step2 = document.querySelector("#png1Step2");
const png2Step2 = document.querySelector("#png2Step2");

// gifs
const gif1Step2 = document.querySelector("#gif1Step2");
const gif2Step2 = document.querySelector("#gif2Step2");

// arrows
const arr1Step2 = document.querySelector("#arr1Step2");
const arr2Step2 = document.querySelector("#arr2Step2");
const arr3Step2 = document.querySelector("#arr3Step2");

// transboxes
const trans1Step2 = document.querySelector("#trans1Step2");
const trans2Step2 = document.querySelector("#trans2Step2");
const trans3Step2 = document.querySelector("#trans3Step2");

// next to step3
const arrNext = document.querySelector(".arr-next");
const nextToStep3 = document.querySelector("#nextToStep3");

addEventListener("DOMContentLoaded", (evt) => {
    step2.style.visibility = "visible";
    instructionsStep2.innerText = "Place an empty beaker on the weighing balance. Press the TARE button.  Weigh 0.78P times the water in the beaker which is required to give cement paste a standard consistency.";
    simulationContainer.style.backgroundColor = "#dbe3e9";

    png1Step2.style.visibility = "visible";
    arr1Step2.style.visibility = "visible";
    trans1Step2.style.visibility = "visible";
});

trans1Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step2.style.visibility = "hidden";
    arr1Step2.style.visibility = "hidden";

    simulationContainer.style.backgroundColor = "#deebf7";
    gif1Step2.style.visibility = "visible";

    setTimeout(() => {
        trans2Step2.style.visibility = "visible";
        arr2Step2.style.visibility = "visible";
    }, 2500);
});

trans2Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step2.style.visibility = "hidden";
    gif1Step2.style.visibility = "hidden"
    simulationContainer.style.backgroundColor = "#dbe3e9";

    png2Step2.style.visibility = "visible"
    setTimeout(() => {
        trans3Step2.style.visibility = "visible";
        arr3Step2.style.visibility = "visible";
    }, 500);
});

trans3Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step2.style.visibility = "hidden";
    png2Step2.style.visibility = "hidden";
    simulationContainer.style.backgroundColor = "#deebf7";

    gif2Step2.style.visibility = "visible";

    setTimeout(() => {
        nextToStep3.style.visibility = "visible";
        arrNext.style.visibility = "visible"
    }, 10000);
})

nextToStep3.addEventListener("click", (evt) => {
    window.location.href = "../steps-files/step3.html";
});