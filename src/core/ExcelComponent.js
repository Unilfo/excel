import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = []) {
        super($root, options.listeners);
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribers = []
        this.prepare()
    }
    // настраиваем компонент до инит
    prepare() {

    }
    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }

    // уведомляем слушателей про события eventName
    $emit(eventName, ...args) {
        this.emitter.emit(eventName, ...args)
    }

    // подписываемся на событие eventName
    $on(eventName, fn) {
        const unsub = this.emitter.subscribe(eventName, fn)
        this.unsubscribers.push(unsub)
    }

    // инициализируем компонент добавляем DOM слушателей
    init() {
        this.initDomListeners()
    }

    // удаляем компонент чистил слушателей
    destroy() {
        this.removeDomListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}
