const images = document.querySelectorAll("#gallery img");
const imageContainer = document.getElementById("image");


images.forEach((img) => {
    img.addEventListener("click", () => {
        imageContainer.src = img.src;
    });
});

/* addEventListener("click", () => {
    imageContainer.src = images.src;

}); */

console.log(images);
