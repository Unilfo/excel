import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            subscribe: ['currentText'],
            ...options
        });
    }

    toHTML() {
        return `
            <div class="excel__formula__info">
                fx
            </div>
            <div id="formula" class="excel__formula__input" 
                contenteditable 
                spellcheck="false"> 
            </div>
        `;
    }

    init() {
        super.init()

        this.$formula = this.$root.find('#formula')

        this.$on('table:select', $cell => {
            this.$formula.text($cell.data.value)
        })
    }

    storeChanged({currentText}) {
        this.$formula.text(currentText)
    }

    onInput(event) {
        this.$emit('formula:input', $(event.target).text())
    }

    onKeydown(event) {
        const keys = ['Enter',  'Tab']
        if (keys.includes(event.key)) {
          event.preventDefault()
          this.$emit('formula:done')
        }
    }
}
