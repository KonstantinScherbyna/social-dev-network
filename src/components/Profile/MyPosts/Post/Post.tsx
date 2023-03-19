import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../../../hook';
import { InewPost } from '../../../../types/types';
import s from './Post.module.css';
import styles from './post.module.css'

const Post = (props: InewPost) => {

  // let myPhoto = useAppSelector(store => store.profilePage.profile.photos)

  return (
    <div className={styles._post}>
      {props.message}
    </div>
  )
}

export default Post;