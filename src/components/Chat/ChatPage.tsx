import { ThemeProvider } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../hook"
import { Box } from '@mui/material';
import { useEffect } from "react";
import { startMessagesListening, stopMessagesListening } from "../../redux/chat-reducer-slice";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import theme2 from "../../theme2";
import ChatMessages from "./ChatMessages";
import ChatMessageForm from "./ChatMessageForm";


const ChatPage = () => {

    const dispatch = useAppDispatch()
    const status = useAppSelector(store => store.chat.status)


    useEffect(() => {
        dispatch(startMessagesListening())

        return () => {

            dispatch(stopMessagesListening())

        }
    }, [])


    return (<ThemeProvider theme={theme2}>
        <Box sx={{

            // backgroundImage: `url(${bgim})`,
            bgcolor: 'iceblue',
            backgroundRepeat: 'repeatx',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

            mt: 8,
            minHeight: '100vh',
            width: '100%',
            overflowY: 'auto',

        }}>
            {status === 'error' && <div>Some error occured. Please refresh a page</div>}

            <ChatMessages />
            <ChatMessageForm />


        </Box>
    </ThemeProvider>
    )
}


export default withAuthRedirect(ChatPage)