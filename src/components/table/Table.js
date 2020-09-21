import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
    static className = 'excel__table'

    toHTML() {
        return `
            <div class="excel__table__row">
                <div class="excel__table__row__info">

                </div>
                <div class="excel__table__row__data">
                    <div class="excel__table__data__column">
                        A
                    </div>
                    <div class="excel__table__data__column">
                        B
                    </div>
                    <div class="excel__table__data__column">
                        C
                    </div>
                    <div class="excel__table__data__column">
                        A
                    </div>
                    <div class="excel__table__data__column">
                        B
                    </div>
                    <div class="excel__table__data__column">
                        C
                    </div>
                    <div class="excel__table__data__column">
                        A
                    </div>
                    <div class="excel__table__data__column">
                        B
                    </div>
                    <div class="excel__table__data__column">
                        C
                    </div>
                    <div class="excel__table__data__column">
                        A
                    </div>
                    <div class="excel__table__data__column">
                        B
                    </div>
                    <div class="excel__table__data__column">
                        C
                    </div>
                    <div class="excel__table__data__column">
                        A
                    </div>
                    <div class="excel__table__data__column">
                        B
                    </div>
                    <div class="excel__table__data__column">
                        C
                    </div>
                    <div class="excel__table__data__column">
                        A
                    </div>
                    <div class="excel__table__data__column">
                        B
                    </div>
                    <div class="excel__table__data__column">
                        C
                    </div>
                    <div class="excel__table__data__column">
                        A
                    </div>
                    <div class="excel__table__data__column">
                        B
                    </div>
                    <div class="excel__table__data__column">
                        C
                    </div>
                    <div class="excel__table__data__column">
                        A
                    </div>
                    <div class="excel__table__data__column">
                        B
                    </div>
                    <div class="excel__table__data__column">
                        C
                    </div>
                </div>
            </div>
            <div class="excel__table__row">
                <div class="excel__table__row__info">
                    1
                </div>
                <div class="excel__table__row__data">
                    <div class="excel__table__data__cell selected" 
                    contenteditable>
                        A1
                    </div>
                    <div class="excel__table__data__cell" 
                    contenteditable>
                        B2
                    </div>
                    <div class="excel__table__data__cell" 
                    contenteditable>
                        C3
                    </div>
                </div>
            </div>
            <div class="excel__table__row">
                <div class="excel__table__row__info">
                    2
                </div>
                <div class="excel__table__row__data">
                    <div class="excel__table__data__cell" 
                    contenteditable>
                        A1
                    </div>
                    <div class="excel__table__data__cell" 
                    contenteditable>
                        B2
                    </div>
                    <div class="excel__table__data__cell" 
                    contenteditable>
                        C3
                    </div>
                </div>
            </div>
        `;
    }
}
