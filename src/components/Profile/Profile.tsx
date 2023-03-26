import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import ProfileInfoContainer from './ProfileInfoContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './profile.module.css'


const Profile = (props: React.HTMLAttributes<HTMLDivElement>) => {

    return (
        <div className={styles._page}>
            <div className={styles._container}>
                <div className={styles._ProfileInfoContainer}>
                    <ProfileInfoContainer />
                </div>
                <div className={styles._MyPostsContainer}>
                    <MyPostsContainer />
                </div>
            </div>

        </div >

    )
}

export default withAuthRedirect(Profile)