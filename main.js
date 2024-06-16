let gridSize = 48;
let container = document.querySelector(".container");

function createField() {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSize; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);

            square.addEventListener("mouseenter", () => {
                square.classList.add("color");
            })
        }

        fragment.appendChild(row);
    }

    container.appendChild(fragment);

}

createField();
