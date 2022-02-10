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
        gridSize = 0;
        gridItems = 0;
        alert('Out of range, please try again');
        promptUser();
    }

    else if (!gridSize) {
        gridSize = 0;
        gridItems = 0;
        alert('Invalid input, please try again');
        promptUser();
    }
    else {
        gridItems = gridSize**2;
        createGrid();
    }
}

function createGrid() {
    container.style = `grid-template-rows: repeat(${gridSize}, 1fr);`;
    container.style = `grid-template-columns: repeat(${gridSize}, 1fr);`;
    for (let i = 0; i < gridItems; i++) {
        gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.classList.add('grid-lines-toggle');
        container.appendChild(gridItem);
    }
    gridItemsList = document.querySelectorAll('div.grid-item');
}


//toggle grid lines
const gridToggleBtn = document.querySelector('.grid-toggle');
gridToggleBtn.addEventListener('click',toggleGridLines);

function toggleGridLines() {
    gridItemsList.forEach(item => {
        item.classList.toggle('grid-lines-toggle');
    })
}

//color picker
const colorPicker = document.querySelector('#color-picker');
let gridColor = colorPicker.value;
let defColor = 'background-color: white';

//grid coloring
gridClick();
function colorChange(e) {
    e.target.style = `background-color: ${colorPicker.value}`;
}
function gridClick() {
    container.addEventListener('mousedown', updateGrid);
    container.addEventListener('mouseup', removeColor);
    
}
function removeColor(e) {
    e.target.style = `background-color: ${colorPicker.value}`;
    gridItemsList.forEach(item => item.removeEventListener('mouseenter', colorChange))
}
function updateGrid(e) {
    e.target.style = `background-color: ${colorPicker.value}`;
    gridItemsList.forEach(item => item.addEventListener('mouseenter', colorChange));
}


//clear grid
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearGrid);
function clearGrid() {
    gridItemsList = document.querySelectorAll('div.grid-item');
    gridItemsList.forEach(item => {
        item.remove();
    });
    gridItemsList = [];
    gridItems = 0;
    gridSize = 0;
    promptUser();
}

//add shading feature
//will go back to this code after a while for the shading feature