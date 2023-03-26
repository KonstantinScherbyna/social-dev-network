import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { IChatMessageAPI } from '../../types/types';
import userPhoto from '../../assets/images/captain-america.jpg'
import styles from './chat.module.css'

const ChatMessage: React.FC<{ message: IChatMessageAPI }> = (({ message }) => {

    return <Box sx={{
        mx: 1,
        my: 2,
        display: 'flex',
    }}
    >
        <div className={styles._body}>
            <NavLink to={`/profile/${message.userId}`}>
                <img alt={message.userName as string}
                    src={message.photo || userPhoto}
                />
            </NavLink>
            <div className={styles._userName}>
                {message.userName}
            </div>
        </div>
        <Box sx={{
            flexGrow: 1,
            mx: 2,
            px: 2,
            borderLeft: 2,
            fontFamily: "'Roboto Condensed', serif",
            borderColor: 'error.main',
            '&:hover': {
                boxShadow: 1,
            },
        }}>
            {message.message}
        </Box>
    </Box >
})

export default ChatMessage