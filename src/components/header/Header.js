import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'excel__header'

    toHTML() {
        return `
            <input type="text" class="excel__header__input" 
            value="Новая таблица">
            <dib>
                <div class="excel__header__button">
                    <i class="material-icons">delete</i>
                </div>
                <div class="excel__header__button">
                    <i class="material-icons">exit_to_app</i>
                </div>
            </dib>
        `;
    }
}
