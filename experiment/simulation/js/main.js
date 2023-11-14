const nextToStep1 = document.querySelector("#nextToStep1");
const mainStep = document.querySelector("#mainStep");

// step 1
const step1 = document.querySelector("#step1");
const instructionsStep1 = document.querySelector("#instructionsStep1");

addEventListener("DOMContentLoaded", (evt) => {
    nextToStep1.style.visibility = "visible";
});

nextToStep1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    mainStep.style.visibility = "hidden";
    step1.style.visibility = "visible";
    instructionsStep1.textContent = "content...";
});