// create reference to container and set up grid
const container = document.querySelector('#container');
container.style.display = 'grid';

// function to color cells black
function colorCell() {
    this.style.background = 'black';
}

// function to resize the grid
function resizeGrid(height = 16, width = 16) {
    // first delete all the old nodes
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    // set grid size
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

    // populate grid
    for (let i = 0; i < width * height; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    
    // set cells to listen for mouse enter event
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseenter', colorCell));
}

// resize button
let resize = document.querySelector('#resize');
resize.addEventListener('click', () => {
    let height = Number(prompt("Enter height (in pixels) of new screen"));
    let width = Number(prompt("Enter width (in pixels) of new screen"));
    resizeGrid(height, width);
});

// clear button
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.background = 'lightgray');
});

// create initial grid
resizeGrid();