//setup grid
const container = document.querySelector('.container');
let gridItemsList = [];
let gridSize = 0;
let gridItems = 0
let gridItem;

promptUser();

function promptUser() {
    gridSize = prompt('Enter grid size #x# (4 to 100)');
    if (gridSize > 100 || gridSize < 1) {
        alert('Out of range, please try again');
        promptUser();
    }

    else if (!gridSize) {
        alert('Invalid input, please try again');
        promptUser();
    }
    gridItems = gridSize**2;
    createGrid();
}

function createGrid() {
    container.style = `grid-template-rows: repeat(${gridSize}, 1fr);`;
    container.style = `grid-template-columns: repeat(${gridSize}, 1fr);`;
    for (let i = 0; i < gridItems; i++) {
        gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style = 'outline: 1px solid gray;';
        container.appendChild(gridItem);
    }
    gridItemsList = document.querySelectorAll('div.grid-item');
}


//grid coloring
gridClick();
function colorChange(e) {
    e.target.style = 'background-color: black';
}
function gridClick() {
    container.addEventListener('mousedown', updateGrid);
    container.addEventListener('mouseup', removeColor);
}
function removeColor(e) {
    e.target.style = 'background-color: black';
    gridItemsList.forEach(item => item.removeEventListener('mouseenter', colorChange))
}
function updateGrid(e) {
    e.target.style = 'background-color: black';
    gridItemsList.forEach(item => item.addEventListener('mouseenter', colorChange));
}

//clear grid
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearGrid);
function clearGrid() {
    gridItemsList.forEach(item => {
        item.remove();
    });
    gridItemsList = [];
    gridItems = 0;
    gridSize = 0;
    promptUser();
}