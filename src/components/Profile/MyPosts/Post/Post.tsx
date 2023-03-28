import { InewPost } from '../../../../types/types';
import styles from './post.module.css'

const Post = (props: InewPost) => {

  return (
    <div className={styles.post}>
      {props.message}
    </div>
  )
}

export default Post;