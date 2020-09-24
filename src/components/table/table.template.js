const CODES = {
    A: 65,
    Z: 90
}

function toCell(content = '') {
    return `
        <div class="excel__table__data__cell" contenteditable></div>`
}

function toColumn(col) {
    return `<div class="excel__table__data__column">${col}</div>`
}

function createRow(content, rowCount = '') {
    return `
        <div class="excel__table__row">
            <div class="excel__table__row__info">${rowCount}</div>
            <div class="excel__table__row__data">${content}</div>
        </div>`
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A +1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(cols))

    const cell = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toCell)
        .join('')

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(cell, i+1))
    }
    return rows.join('')
}
