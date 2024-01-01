const step7 = document.querySelector("#step7");
const instructionsStep7 = document.querySelector("#instructionsStep7");

const simulationContainer = document.querySelector(".simulation-container");
const pngColor = "#dbe3e9", gifColor = "#deebf7";

const png1Step7 = document.querySelector("#png1Step7");

const trans1Step7 = document.querySelector("#trans6Step7");

const arr1Step7 = document.querySelector("#arr1Step7");

const nextToPosttest = document.querySelector("#nextToPosttest");

const arrNext = document.querySelector(".arr-next");

addEventListener("DOMContentLoaded", (evt) => {
    step7.style.visibility = "visible";
    instructionsStep7.innerText = "content...";
    simulationContainer.style.backgroundColor = pngColor;
    png1Step7.style.visibility = "visible";
    arr1Step7.style.visibility = "visible";
    trans1Step7.style.visibility = "visible";
});

nextToPosttest.addEventListener("click", (evt) => {
    window.location.href = "";
})