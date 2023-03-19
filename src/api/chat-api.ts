import { IChatMessageAPI } from "../types/types"

const subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[]
}



let ws: WebSocket | null = null

type EventsNamesType = 'messages-received' | 'status-changed'

const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannal, 3000)
    console.log('REFRESH PAGE')
}


const messageHandler = (e: MessageEvent) => {

    const newMessages: IChatMessageAPI[] = JSON.parse(e.data)
 
    subscribers['messages-received'].forEach(s => s(newMessages))
   
}
const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}
const errorHandler = () => {
    notifySubscribersAboutStatus('error')
}


const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
    console.log('REMOVEING')
}

const notifySubscribersAboutStatus = (status: StatusType) => {
    subscribers['status-changed'].forEach(s => s(status))
}

const createChannal = () => {
    cleanUp()

    ws?.close()
    console.log('CREATEING')
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
   
}




export const chatAPI = {

    start() {
     
        createChannal()
    },

    stop() {

        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
     
        ws?.close()
    },

    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
      
        // @ts-ignore
        subscribers[eventName].push(callback)
      
    },

    unsubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {

        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },

    sendMessage(message: string) {
        ws?.send(message)
    }

}

type MessagesReceivedSubscriberType = (messages: IChatMessageAPI[]) => void
type StatusChangedSubscriberType = (status: StatusType) => void



export type StatusType = 'pending' | 'ready' | 'error'