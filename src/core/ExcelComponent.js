import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.subscribe = options.subscribe || []
        this.store = options.store
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
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // подписываемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    $dispatch(action) {
       this.store.dispatch(action)
    }

    storeChanged() {

    }

    isWatching(key) {
        return this.subscribe.includes(key)
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
