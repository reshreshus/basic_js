const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const hexBtn = document.querySelector('.hexBtn');
const body = document.querySelector('body');
const hexContainer = document.querySelector('.hex')

hexBtn.addEventListener('click', createHex);

function createHex() {
    let hexCol = '#'
    for (let i = 0; i < 6; i++) {
        hexNumberIndex = Math.floor(Math.random() * hexNumbers.length)
        hexCol += hexNumbers[hexNumberIndex];
    }
    body.style.background = hexCol;
    hexContainer.innerHTML = hexCol;
}
