import React from 'react';
import { addPostAction } from '../../../redux/profile-reducer-slice';
import { useState } from 'react';
import { useAppDispatch } from '../../../hook';
import MyPosts from './MyPosts';

// my posts on profile page
const MyPostsContainer = () => {

    const [newPostText, setNewPostText] = useState<string>('')
    const dispatch = useAppDispatch()


    // let newPostElement = React.createRef();
    const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        setNewPostText(text)
    }

    const onAddPost = () => {
        dispatch(addPostAction(newPostText))
        setNewPostText('')
    }


    const sendMessageEvent = (e: any) => {
        if (!newPostText) {
            return
        } if (e.key === 'Enter') {
            dispatch(addPostAction(newPostText))
            debugger
            setNewPostText('')
        }
    }

    return (
        <MyPosts
            sendMessageEvent={sendMessageEvent}
            onPostChange={onPostChange}
            onAddPost={onAddPost}
            newPostText={newPostText} />
    )
}

export default MyPostsContainer;