let currentColorMode = 'random';

function getLightColor() {
    let r = Math.floor(Math.random() * 128) + 128;
    let g = Math.floor(Math.random() * 128) + 128;
    let b = Math.floor(Math.random() * 128) + 128;
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    const container = document.getElementById("grid");
    container.innerHTML = "";
    let squareSize = 480 / size + "px";

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = squareSize;
        div.style.height = squareSize;
        
        let opacity = 0;
        div.addEventListener("mouseover", function () {
            if (currentColorMode === 'random') {
                if (opacity < 1) opacity += 0.1;
                div.style.backgroundColor = getLightColor();
                div.style.opacity = opacity;
            } else {
                div.style.backgroundColor = 'black';
            }
        });
        container.appendChild(div);
    }
}

function resetGrid() {
    let size = prompt("Enter grid size (max 100):");
    size = parseInt(size);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Invalid input. Please enter a number between 1 and 100.");
    }
}

function resetColors() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "white";
        item.style.opacity = 1;
    });
}

function toggleColorMode() {
    currentColorMode = currentColorMode === 'random' ? 'black' : 'random';
    const modeButton = document.getElementById("colorModeButton");
    modeButton.textContent = currentColorMode === 'random' ? 'Random Colors' : 'Black Mode';
}

document.addEventListener("DOMContentLoaded", function () {
    createGrid(16);
    
    // Add color mode button
    const buttonContainer = document.querySelector('.button-container');
    const colorModeButton = document.createElement('button');
    colorModeButton.id = 'colorModeButton';
    colorModeButton.textContent = 'Random Colors';
    colorModeButton.onclick = toggleColorMode;
    buttonContainer.appendChild(colorModeButton);
});