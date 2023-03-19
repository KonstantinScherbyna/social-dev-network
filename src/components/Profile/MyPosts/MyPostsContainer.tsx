import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
// import profileReducer, { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { addPostAction } from '../../../redux/profile-reducer-slice';
import profileReducerSlice from '../../../redux/profile-reducer-slice';
// import { initialState } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
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