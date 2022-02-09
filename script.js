//setup grid
const container = document.querySelector('.container');
let gridSize = 32;
let gridItems = gridSize**2;
container.style = `grid-template-rows: repeat(${gridSize}, 1fr);`;
container.style = `grid-template-columns: repeat(${gridSize}, 1fr);`;
let gridItem;
for (let i = 0; i < gridItems; i++) {
    gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style = 'outline: 1px solid gray;';
    container.appendChild(gridItem);
}

function itemAdd(e) {
    e.target.style = 'background: black';
}

const gridItemsList = document.querySelectorAll('div.grid-item');
container.addEventListener('mousedown', () => {
    gridItemsList.forEach(item => item.addEventListener('mouseenter', itemAdd));
  })

container.addEventListener('mouseup', () => {
    gridItemsList.forEach(item => item.removeEventListener('mouseenter', itemAdd))
})