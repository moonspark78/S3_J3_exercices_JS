const input = document.getElementById("numberInput");
const tableBody = document.getElementById("resultTable");

input.addEventListener("input", function() {
    const number = input.value;
    

    const carre = number * number;
    const cube = number * number * number;

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
    <td>${number}</td>
    <td>${carre}</td>
    <td>${cube}</td>
    `;

    tableBody.appendChild(newRow);
});