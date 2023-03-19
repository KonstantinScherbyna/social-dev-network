import React from 'react';
// import s from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import Message from "./Dialog";
import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer-slice';
import { useDispatch, useSelector } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { useAppDispatch, useAppSelector } from '../../hook';
import { Icomponent } from '../../types/types';
import Box from '@mui/material/Box/Box';
import bgim from '../../assets/images/wall-white.jpg'

// Messages Component
const Dialogs = (props: any) => {
 

    return (
        // <div className={s.dialogs}>
        <Box >
            {/* <div className={s.dialogsItems}></div> */}
            <div>
                {props.dialogsElements}
            </div>
            {/* <div className={s.messages}> */}
            <div>
                <div>
                    <textarea
                        value={props.newMessageBody}
                        onChange={props.onNewMessageChange}
                        placeholder='Enter your message'>
                    </textarea>
                    <div>
                        <button onClick={props.onSendMessageClick}>Send</button>
                    </div>
                </div>
                <div>{props.messagesElements}</div>
            </div>
        </Box>
    )
}

export default Dialogs

// export default Dialogs;