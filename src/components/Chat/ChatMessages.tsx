import { useEffect, useRef, useState } from "react"
import { useAppSelector } from "../../hook"
import ChatMessage from "./ChatMessage"
import { Box } from '@mui/material';


const ChatMessages = () => {
    const messages = useAppSelector((store) => store.chat.messages)

    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }

    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    return <Box
        onScroll={scrollHandler}
    >
        {messages.map((m) => <ChatMessage key={m.id} message={m} />)}

        <div ref={messagesAnchorRef}></div>

    </Box>
}

export default ChatMessages