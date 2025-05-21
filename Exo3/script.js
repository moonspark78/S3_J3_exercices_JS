let compteur = 0;
const topLeft = document.getElementById("top-left");
const topRight = document.getElementById("top-right");
const bottomLeft = document.getElementById("bottom-left");
const bottomRight = document.getElementById("bottom-right");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    topLeft.classList.remove("blue");
    topRight.classList.remove("blue");
    bottomLeft.classList.remove("blue");
    bottomRight.classList.remove("blue");

    if (compteur === 0) {
        topLeft.classList.add("blue");
    }else if (compteur === 1) {
        topRight.classList.add("blue");
    }else if (compteur === 2) {
        bottomLeft.classList.add("blue");
    }else if(compteur === 3) {
        bottomRight.classList.add("blue");
    };
    
    compteur++;

    if (compteur > 3) {
        compteur = 0;
    }
});