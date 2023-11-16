const step4 = document.querySelector("#step4");
const instructionsStep4 = document.querySelector("#instructionsStep4");

const png1Step4 = document.querySelector("#png1Step4");

const gif1Step4 = document.querySelector("#gif1Step4");

const trans1Step4 = document.querySelector("#trans1Step4");

const arr1Step4 = document.querySelector("#arr1Step4");

addEventListener("DOMContentLoaded", (evt) => {
    step4.style.visibility = "visible";
    instructionsStep4.innerText = "Content ...";

    // png1Step4.style.visibility = "visible";
    arr1Step4.style.visibility = "visible";
    trans1Step4.style.visibility = "visible";
});

trans1Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step4.style.visibility = "hidden";
    // png1Step4.style.visibility = "hidden";

    gif1Step4.style.visibility = "visible";

    // setTimeout(() => {
        
    // }, 4500);
})