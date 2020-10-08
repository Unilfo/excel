import {ExcelComponent} from '@core/ExcelComponent';
import {changeTitle} from '@/redux/actions'
import {$} from '@core/dom'
import {defaultTitle} from '@/constanst'

export class Header extends ExcelComponent {
    static className = 'excel__header'

    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['input'],
            ...options
        })
    }

    toHTML() {
        const title = this.store.getState().title || defaultTitle
        return `
            <input type="text" class="excel__header__input" 
            value="${title}">
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

    onInput(event) {
        const $target = $(event.target)
        this.$dispatch(changeTitle($target.text()))
    }
}
