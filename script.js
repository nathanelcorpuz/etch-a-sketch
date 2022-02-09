const container = document.querySelector('.container');
let gridSize = 16;
let gridItems = gridSize**2;
container.style = `grid-template-rows: repeat(${gridSize}, 1fr);`;
container.style = `grid-template-columns: repeat(${gridSize}, 1fr);`;
let gridItem;

for (let i = 0; i < gridItems; i++) {
    gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style = 'border: 1px solid red;';
    gridItem.addEventListener('mouseenter', (e) => {
        e.target.style = 'background: black';
    })
    container.appendChild(gridItem);
}

