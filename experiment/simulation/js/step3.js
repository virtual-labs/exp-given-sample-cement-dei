const step3 = document.querySelector("#step3");
const instructionsStep3 = document.querySelector("#instructionsStep3");
const simulationContainer = document.querySelector(".simulation-container");


// images
const png1Step3 = document.querySelector("#png1Step3");

// gifs
const gif1Step3 = document.querySelector("#gif1Step3");

// arrows
const arr1Step3 = document.querySelector("#arr1Step3");

// transboxes
const trans1Step3 = document.querySelector("#trans1Step3");

// next to step3
const arrNext = document.querySelector(".arr-next");
const nextToStep4 = document.querySelector("#nextToStep4");

addEventListener("DOMContentLoaded", (evt) => {
    step3.style.visibility = "visible";
    instructionsStep3.innerText = "Content...";

    png1Step3.style.visibility = "visible";
    arr1Step3.style.visibility = "visible";
    trans1Step3.style.visibility = "visible";
});

trans1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step3.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    
    simulationContainer.style.backgroundColor = "#deebf7";
    gif1Step3.style.visibility = "visible";

    setTimeout(() => {
        nextToStep4.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3500);
});

nextToStep4.addEventListener("click", (evt) => {
    window.location.href = "../steps-files/step4.html";
});