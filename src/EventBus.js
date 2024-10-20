class EventBus {
    constructor() {
        this.listeners_ = null;
    }

    on(type, listener) {
        if (!type || !listener) {
            return
        }
        if (typeof listener !== 'function') {
            throw new TypeError(`listener must be a function`);
        }
        const listeners = this.listeners_ || (this.listeners_ = {});
        const listenersForType = listeners[type] || (listeners[type] = [])
        if (!listenersForType.includes(listener)) {
            listenersForType.push(listener);
        }
    }

    un(type, listener) {
        if (!type || !listener || !this.listeners_) {
            return
        }
        const listeners = this.listeners_[type];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listener);
        if (index !== -1) {
            listeners.splice(index, 1);
            if (listeners.length === 0) {
                delete this.listeners_[type];
            }
        }

    }

    emit(type, ...value) {
        const listeners = this.listeners_ && this.listeners_[type];
        if (!listeners) {
            return;
        }
        for (const listener of listeners) {
            listener(value)
        }
    }

    clearListeners() {
        if (!this.listeners_) {
            return
        }
        for (const property in this.listeners_) {
            delete this.listeners_[property]
        }
    }
}

export default EventBus
