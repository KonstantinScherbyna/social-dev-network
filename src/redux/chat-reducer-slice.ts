import { createAction, createAsyncThunk, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { chatAPI, StatusType } from "../api/chat-api";
import { IChatMessageAPI, } from "../types/types";
import { v1 } from 'uuid'

const messagesReceived = createAction<IChatMessageAPI[]>('messagesReceived')


let _newMessageHandler: ((messages: IChatMessageAPI[]) => void) | null = null
let _statusChangedHandler: ((status: StatusType) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {


    if (_newMessageHandler === null) {

        _newMessageHandler = (messages) => {

            dispatch(messagesReceived(messages))
        }
    }

    return _newMessageHandler
}
const statusChangedHandlerCreator = (dispatch: Dispatch) => {

    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(statusChanged(status))
        }
    }
    return _statusChangedHandler
}

// fetch to get Captch for login
export const startMessagesListening = createAsyncThunk<void, void>(
    'authReducerSlice/startMessagesListening', async (_, { dispatch }) => {

        chatAPI.start()

        chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))

        chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))

    }
)
export const stopMessagesListening = createAsyncThunk<void, void>(
    'authReducerSlice/stopMessagesListening', async (_, { dispatch }) => {

        chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))

        chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))

        chatAPI.stop()
    }
)
export const sendMessage = createAsyncThunk<void, string>(
    'authReducerSlice/sendMessage', async (message, { dispatch }) => {

        chatAPI.sendMessage(message)

    }
)

interface IChatMessageType {
    id: string
    message: string
    photo: string
    userId: number
    userName: string
}

interface IChatState {
    messages: IChatMessageType[]
    status: StatusType
}


// interface IChatState {
//     messages: IChatMessageAPI[]
//     status: StatusType
// }

let initialState: IChatState = {
    messages: [],
    status: 'pending'

}

const chatReducerSlice = createSlice({
    name: 'chatReducerSlice',
    initialState,
    reducers: {
        // messagesReceived(state, action: PayloadAction<IChatMessageAPI[]>) {

        //     
        //     let s1: IChatMessageType[] = action.payload.map(m => ({ ...m, id: v1() }))
        //     console.log(s1)
        //     let s2: IChatMessageType[] = s1.filter((m, index, array) => index >= array.length - 100)
        //     // state.messages = s2
        //     

        //     state.messages.push(s2)
        //     // state.messages = action.payload


        // },
        statusChanged(state, action: PayloadAction<StatusType>) {
            state.status = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(messagesReceived, (state, action) => {

                // let s1: IChatMessageType[] = action.payload.map(m => ({ ...m, id: v1() }))
                // let s2 = s1.filter((m, index, array) => index >= array.length - 100)






                // return {
                //     ...state,
                //     messages: [...state.messages, ...s1]
                //         .filter((m, index, array) => index >= array.length - 100)
                // }


                return {
                    ...state,
                    messages: [...state.messages, ...action.payload.map(m => ({ ...m, id: v1() }))]
                        .filter((m, index, array) => index >= array.length - 100)
                }



                // let s1: IChatMessageType[] = action.payload.map(m => ({ ...m, id: v1() }))
                // let s2 = s1.filter((m, index, array) => index >= array.length - 100)

                // if (state.messages == s2) {
                //     return state
                // } return {
                //     ...state,
                //     messages: [...state.messages, ...s1]
                //         .filter((m, index, array) => index >= array.length - 100)
                // }

            })
    },
})

export default chatReducerSlice.reducer
export const { statusChanged } = chatReducerSlice.actions
// export const { messagesReceived, statusChanged } = chatReducerSlice.actions
