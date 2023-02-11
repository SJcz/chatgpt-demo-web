const ST_INITED = 0;
const ST_CLOSED = 1;

interface IRequestMsg {
    requestId: number;
    type: string;
    route: string;
    data: any;
}

export interface IResponseMsg {
    requestId: number;
    type: string;
    code: number;
    data: any;
}

export default class WebsocketSession {
    state: number;
    websocket: WebSocket;
    requestIndex: number;
    listeners: { [eventType: string]: Function[] };
    constructor(websocket: WebSocket) {
        this.websocket = websocket;
        this.requestIndex = 1;
        this.listeners = {};
        this.state = ST_CLOSED;
        this._initEvents();
    }

    on(type: string, callback: Function) {
        if (!(type in this.listeners)) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    }

    emit(type: string, ...params: any[]) {
        if (!(type in this.listeners)) return;
        const stack = this.listeners[type];
        for (let i = 0, l = stack.length; i < l; i++) {
            stack[i](...params);
        }
    }

    _initEvents() {
        this.websocket.onopen = () => {
            this.state = ST_INITED;
            this.emit('open');
        };
        this.websocket.onerror = (error: Event) => {
            this.websocket.close()
            this.state = ST_CLOSED;
            this.emit('error', error);
        };
        this.websocket.onclose = (error: CloseEvent) => {
            this.websocket.close()
            this.state = ST_CLOSED;
            this.emit('close', error);
        };
        this.websocket.onmessage = (msg: MessageEvent) => {
            // console.log(msg)
            const message: IResponseMsg = JSON.parse(msg.data);
            if (message.type === 'response') {
                this.emit('response', message)
            } else {
                console.log(`recieve unknown message type: ${message.type}`)
            }

        }
    }

    send(msg: string | object) {
        if (this.state !== ST_INITED) return;
        if (typeof msg !== 'string') msg = JSON.stringify(msg);
        this.websocket.send(msg);
    }

    request(msg: IRequestMsg): number {
        msg.requestId = ++this.requestIndex;
        msg.type = 'request';
        this.send(msg);
        return this.requestIndex
    }

    close() {
        if (this.state !== ST_INITED) return;
        this.websocket.close();
    }
}