import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hook"
import { sendMessage } from "../../redux/chat-reducer-slice"
import { Box, TextField, Button } from '@mui/material';

const ChatMessageForm = () => {

    const dispatch = useAppDispatch()

    const [message, setMessage] = useState('')

    const status = useAppSelector(store => store.chat.status)

    const sendMessageEvent = (e: any) => {
        if (!message) {
            return
        } if (e.key === 'Enter') {
            dispatch(sendMessage(message))
            setMessage('')
        }
    }
    const sendMessageHandler = () => {
        if (!message) {
            return
        } dispatch(sendMessage(message))
        setMessage('')
    }

    return <Box sx={{
        display: 'flex',
    }}>
        <TextField autoFocus onKeyDown={sendMessageEvent} onChange={(e) => setMessage(e.currentTarget.value)} value={message} label="Print Your Message" sx={{ m: 1, width: '100%' }}/>
        <Button onClick={sendMessageHandler} disabled={status !== 'ready'} sx={{ m: 1, color: '#bcaaa4' }} variant="contained" size='small'>send</Button>

    </Box>
}

export default ChatMessageForm