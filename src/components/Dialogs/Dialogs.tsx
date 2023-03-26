import Box from '@mui/material/Box/Box';


// Messages Component
const Dialogs = (props: any) => {
 
    return (
        <Box >
            <div>
                {props.dialogsElements}
            </div>
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