const step2 = document.querySelector("#step2");
const instructionsStep2 = document.querySelector("#instructionsStep2");
const simulationContainer = document.querySelector(".simulation-container");


// images
const png1Step2 = document.querySelector("#png1Step2");

// gifs
const gif1Step2 = document.querySelector("#gif1Step2");

// arrows
const arr1Step2 = document.querySelector("#arr1Step2");

// transboxes
const trans1Step2 = document.querySelector("#trans1Step2");

// next to step3
const arrNext = document.querySelector(".arr-next");
const nextToStep3 = document.querySelector("#nextToStep3");

addEventListener("DOMContentLoaded", (evt) => {
    step2.style.visibility = "visible";
    instructionsStep2.innerText = "Content...";

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
        nextToStep3.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 5500);
});

nextToStep3.addEventListener("click", (evt) => {
    window.location.href = "../steps-files/step3.html";
});