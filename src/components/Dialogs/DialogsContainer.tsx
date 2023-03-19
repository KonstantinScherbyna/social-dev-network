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
import Dialogs from './Dialogs';

// Messages Component
const DialogsContainer = (props: any) => {
    let dispatch = useAppDispatch()

    let dialosPage = useAppSelector(store => store.dialogsPage)

    // outputs each user
    let dialogsElements = dialosPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} props={props} />);
    // outputs each message
    let messagesElements = dialosPage.messages.map(m => <Message message={m} key={m} props={props} />);

    let newMessageBody = dialosPage.newMessageBody;

    let onSendMessageClick = () => {
        dispatch(sendMessage())
    }

    // change handler textarea
    let onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        dispatch(updateNewMessageBody(body));
    }

    return (

        <Box sx={{
            // backgroundImage: `url(${backgroundImage})`,
            bgcolor: 'iceblue',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            mt: 8,
            minHeight: '100vh',
            width: '100%',
            overflowY: 'auto',
        }}>
            <Dialogs
                dialogsElements={dialogsElements}
                messagesElements={messagesElements}
                newMessageBody={newMessageBody}
                onSendMessageClick={onSendMessageClick}
                onNewMessageChange={onNewMessageChange}
            />
        </Box>
    )
}

export default withAuthRedirect(DialogsContainer)

// export default Dialogs;