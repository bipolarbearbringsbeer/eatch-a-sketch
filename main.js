let gridSize = 16;
let container = document.querySelector(".container");
let row = document.createElement("div");
row.classList.add("row");

function createField() {
    for (let i = 0; i < gridSize; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }

    while (gridSize > 0) {
        container.appendChild(row.cloneNode(true));
        gridSize -= 1;
    }
}

createField();