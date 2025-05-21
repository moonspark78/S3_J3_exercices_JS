const input = document.getElementById("inputTexte");
const output = document.getElementById("copieTexte");

input.addEventListener("input", function() {
    output.textContent = input.value;
});