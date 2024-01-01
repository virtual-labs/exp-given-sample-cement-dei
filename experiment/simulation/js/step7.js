const step7 = document.querySelector("#step7");
const instructionsStep7 = document.querySelector("#instructionsStep7");

const simulationContainer = document.querySelector(".simulation-container");
const pngColor = "#dbe3e9", gifColor = "#deebf7";

const png1Step7 = document.querySelector("#png1Step7");
const png2Step7 = document.querySelector("#png2Step7");
const png3Step7 = document.querySelector("#png3Step7");
const png4Step7 = document.querySelector("#png4Step7");
const png5Step7 = document.querySelector("#png5Step7");
const png6Step7 = document.querySelector("#png6Step7");

const trans1Step7 = document.querySelector("#trans1Step7");
const trans2Step7 = document.querySelector("#trans2Step7");
const trans3Step7 = document.querySelector("#trans3Step7");
const trans4Step7 = document.querySelector("#trans4Step7");
const trans5Step7 = document.querySelector("#trans5Step7");
const trans6Step7 = document.querySelector("#trans6Step7");

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