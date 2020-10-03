const CODES = {
    A: 65,
    Z: 90
}

function toCell(content = '') {
    return `
        <div class="excel__table__data__cell" contenteditable></div>`
}

function toColumn(col) {
    return `
        <div class="excel__table__data__column" data-type="resizable">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>`
}

function createRow(content, rowCount = '') {
    const resize = rowCount?
        `<div class="row-resize" data-resize="row">
         </div>`: ''
    return `
        <div class="excel__table__row">
            <div class="excel__table__row__info">
                ${rowCount}
                ${resize}
            </div>
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
