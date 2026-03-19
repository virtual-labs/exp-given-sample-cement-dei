const step7 = document.querySelector("#step7");
const instructionsStep7 = document.querySelector("#instructionsStep7");

const conslusion = document.querySelector("#conclusion");

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

const arr1Step7 = document.querySelector("#arr1Step7");
const arr2Step7 = document.querySelector("#arr2Step7");
const arr3Step7 = document.querySelector("#arr3Step7");
const arr4Step7 = document.querySelector("#arr4Step7");

const nextToPosttest = document.querySelector("#nextToPosttest");

const arrNext = document.querySelector(".arr-next");

addEventListener("DOMContentLoaded", (evt) => {
    step7.style.visibility = "visible";

    instructionsStep7.innerText = " Perform the same procedure for another set of observations and calculate the average of the two values to find the expansion of cement.";
    
    simulationContainer.style.backgroundColor = pngColor;
    png1Step7.style.visibility = "visible";
    arr1Step7.style.visibility = "visible";
    trans1Step7.style.visibility = "visible";
});

trans1Step7.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step7.style.visibility = "hidden";
    png1Step7.style.visibility = "hidden";
    
    png2Step7.style.visibility = "visible";

    setTimeout(() => {
        trans2Step7.style.visibility = "visible";
        arr2Step7.style.visibility = "visible";
    }, 1000);
});

trans2Step7.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step7.style.visibility = "hidden";
    png2Step7.style.visibility = "hidden";
    
    png3Step7.style.visibility = "visible";

    setTimeout(() => {
        trans3Step7.style.visibility = "visible";
        arr3Step7.style.visibility = "visible";
    }, 1000);

});

trans3Step7.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step7.style.visibility = "hidden";
    png3Step7.style.visibility = "hidden";
    
    png4Step7.style.visibility = "visible";

    setTimeout(() => {
        trans4Step7.style.visibility = "visible";
        arr4Step7.style.visibility = "visible";
    }, 1000);
});

trans4Step7.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step7.style.visibility = "hidden";
    png4Step7.style.visibility = "hidden";
    
    png5Step7.style.visibility = "visible";

    setTimeout(() => {
        conslusion.style.visibility = "visible";
    }, 1000);

    setTimeout(() => {
        nextToPosttest.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3000);
});

nextToPosttest.addEventListener("click", (evt) => {
    window.location.href = "https://virtual-labs.github.io/exp-given-sample-cement-dei/posttest.html";
})