import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import ProfileInfoContainer from './ProfileInfoContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './profile.module.css'
import { useAppSelector } from '../../hook';
import { useParams } from 'react-router-dom';


const Profile = () => {

    let { userId } = useParams()

    return (
        <div className={styles._page}>
            <div className={styles._container}>
                <div className={styles._ProfileInfoContainer}>
                    <ProfileInfoContainer />
                </div>
                {!userId && <div className={styles._MyPostsContainer}>
                    <MyPostsContainer />
                </div>}
            </div>

        </div >

    )
}

export default withAuthRedirect(Profile)