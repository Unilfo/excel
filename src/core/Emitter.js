export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // уведомляем слушателей если они есть
    emit(eventName, ...args) {
        if (!Array.isArray(this.listeners[eventName])) {
            return false
        }
        this.listeners[eventName].forEach(listener => {
            listener(...args)
        })
        return true
    }

    // подписка на уведомления
    subscribe(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || []
        this.listeners[eventName].push(fn)
        return () => {
            this.listeners[eventName] =
                this.listeners[eventName]
                    .filter(listener => listener !== fn)
        }
    }
}
