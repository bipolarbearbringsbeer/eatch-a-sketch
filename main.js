let startGame = document.querySelector("button");
startGame.addEventListener("click", () => {
    createField();
});

function createField() {
    let gridSize;

    do {
        gridSize = parseInt(prompt("Add drawing field size (between 10 and 100): "));
    } while (isNaN(gridSize) || gridSize > 100 || gridSize < 10);


    let container = document.querySelector(".container");
    container.innerHTML = '';

    let fragment = document.createDocumentFragment();

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSize; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }

        fragment.appendChild(row);
    }

    container.appendChild(fragment);

    let isMouseDown = false;

    document.addEventListener("mousedown", () => {
        isMouseDown = true;
    });

    document.addEventListener("mouseup", () => {
        isMouseDown = false;
    })

    // Delegate event to container for better performance
    container.addEventListener("mousemove", (e) => {
        if (isMouseDown && e.target.classList.contains("square")) {
            e.target.classList.add("color");
        }
    })

}
