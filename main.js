let gridSize = 16;
let container = document.querySelector(".container");
let row = document.createElement("div");
row.classList.add("row");

function addSquaresToRow() {
    for (let i = 0; i < gridSize; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }

    addRow();

    function addRow() {
        for (let i = 0; i < gridSize; i++) {
            container.appendChild(row.cloneNode(true));
            console.log("create");
        }
    }
}

addSquaresToRow();

