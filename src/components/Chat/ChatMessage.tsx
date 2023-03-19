import { Box, TextField, Button, Avatar } from '@mui/material';
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
        {/* <Box sx={{
            textAlign: 'center',

            width: 200
        }}>
            <NavLink to={`/profile/${message.userId}`}>
                <Avatar variant="rounded"
                    alt={message.userName as string}
                    src={message.photo || userPhoto}

                    sx={{
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        width: 150,
                        height: 150,
                        boxShadow: 3,
                        border: 2,
                        borderColor: 'primary.light',
                        '&:hover': {
                            backgroundColor: 'success.main',
                            opacity: [0.9, 0.8, 0.9],
                        },
                    }}
                />
            </NavLink>
            <Box sx={{

                mt: 1,
                fontSize: 'h6.fontSize',
                color: 'primary.main'
            }}
            >
                {message.userName}
            </Box>
        </Box> */}


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