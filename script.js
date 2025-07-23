// waits the html page to be fully loaded and then
// executes the arrow function (callback)
const crosswordConfig = {
    grid: [
        [null, 'A', 'A', 'A', null],
        ['A', 'A', 'A', 'A', 'A'],
        ['A', 'A', 'A', 'A', 'A'],
        ['A', 'A', 'A', 'A', 'A'],
        [null, 'A', 'A', 'A', null]],
    words : {
        '1across': {answer: 'BAH', row: 0, col: null},
        '2across': {answer: 'CACAC', row: 1, col: null},
        '3across': {answer: 'CACAC', row: 2, col: null},
        '4across': {answer: 'CACAC', row: 3, col: null},
        '5across': {answer: 'BAB', row: 4, col: null},
        '1down': {answer: 'BAB', row: null, col: 1},
        '2down': {answer: 'CACAC', row: null, col: 2},
        '3down': {answer: 'CACAC', row: null, col: 3},
        '4down': {answer: 'CACAC', row: null, col: 0},
        '5down': {answer: 'BAB', row: null, col: 4},
    }
}

function generateGrid(config) {
    const container = document.querySelector('.cw-grid');
    container.innerHTML = '';

    config.grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellDiv = document.createElement('div');

            if (cell == null) {
                cellDiv.className = 'cw-cell-null';
            } else {
                cellDiv.className = 'cw-cell';

                const input = document.createElement('input');
                input.className = 'cw-input';
                input.type = 'text';
                input.maxLength = 1;
                input.id = `cell-${rowIndex}-${colIndex}`;
                
                cellDiv.appendChild(input);
            };
            container.appendChild(cellDiv);
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    generateGrid(crosswordConfig);
});