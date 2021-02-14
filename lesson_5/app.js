/* 1 task*/

let main = document.querySelector('.chess')

let tableRows
let tableColumns

let ceils

function createChess(columns, row) {
    tableColumns = columns + 2;
    tableRows = row + 2;
    ceils = tableColumns * tableRows;
    for (let i = 0; i < tableRows; i++) {
        for (let j = 0; j < tableColumns; j++) {
            let block = document.createElement('div')
            block.className = 'block'
            if (i % 2 === 0 && j % 2 !== 0 && i !== 0 && j !== tableColumns - 1) {
                block.style.backgroundColor = 'black'
            } else if (i % 2 !== 0 && j % 2 === 0 && i !== tableRows - 1 && j !== 0) {
                block.style.backgroundColor = 'black'
            }
            main.style.maxWidth = `${tableColumns * 50 + 20}px`
            main.style.minWidth = `${tableColumns * 50 + 10}px`
            main.append(block)
        }
    }
}

createChess(8, 8)

const chess = document.querySelectorAll('.block')

createChar(chess)

createNums(chess)

function createChar(chess) {
    for (let i = 0; i < ceils; i++) {
        let startLetter = 64 + i;
        if ((i > 0 && i < tableColumns - 1)) {
            chess[i].textContent = String.fromCharCode(startLetter);
            chess[i].style.transform = 'rotate(180deg)'
            chess[i].style.backgroundColor = 'white'
        } else if ((i > ceils - tableColumns) && (i < ceils - 1)) {
            chess[i].textContent = String.fromCharCode(startLetter - ceils + tableColumns);
            chess[i].style.backgroundColor = 'white'
        }
    }
}

function createNums(chess) {
    for (let j = tableColumns; j < ceils; j = j + tableColumns) {
        if (j !== ceils - tableColumns) {
            chess[j].textContent = `${(ceils - j) / (tableColumns) - 1}`
            chess[j].style.backgroundColor = 'white'
        }
    }
    for (let j = 2 * tableColumns; j < ceils; j = j + tableColumns) {
        if (j !== ceils - 1) {
            chess[j - 1].textContent = `${(ceils - j) / tableColumns}`
            chess[j - 1].style.transform = 'rotate(180deg)'
            chess[j - 1].style.backgroundColor = 'white'
        }
    }
}

