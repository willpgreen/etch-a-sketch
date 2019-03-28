// create reference to container and set up grid
const container = document.querySelector('#container');
container.style.display = 'grid';

// function to color cells randomly
function crazyCell() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.style.background = `rgb(${red}, ${blue}, ${green})`;
}

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

let crazy = document.querySelector('#crazy');
crazy.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.removeEventListener('mouseenter', colorCell));
    cells.forEach(cell => cell.addEventListener('mouseenter', crazyCell));
});

let back2Black = document.querySelector('#black');
back2Black.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.removeEventListener('mouseenter', crazyCell));
    cells.forEach(cell => cell.addEventListener('mouseenter', colorCell));
})

// create initial grid
resizeGrid();