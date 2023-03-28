import Post from './Post/Post';
import { useAppSelector } from '../../../hook';
import { TextField } from '@mui/material';
import { IMyPosts } from '../../../types/types';
import theme2 from '../../../theme2';
import { ThemeProvider } from '@mui/material/styles';
import styles from './myPosts.module.css'


// my posts on profile page
const MyPosts = ({ onPostChange, onAddPost, sendMessageEvent, newPostText, }: IMyPosts) => {


    const posts = useAppSelector((state) => state.profilePage.posts)
    
    return (<ThemeProvider theme={theme2}>
        <div className={styles._page}>

            <TextField onKeyDown={sendMessageEvent} color='primary' id="TextField-MyPosts" label="Enter your post" variant="outlined"
                onChange={onPostChange}
                value={newPostText}
                sx={{ mt: 2, mr: 1, width: '100%' }}
            />

            <button onClick={onAddPost} className={styles._addPostButton}>Add post</button>

        </div>
        <div className={styles._posts}>
            {posts.map(p => <Post key={p.id} message={p.message} id={p.id} />)}
        </div>
    </ThemeProvider>
    )
}

export default MyPosts;