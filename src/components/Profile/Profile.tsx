import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import ProfileInfoContainer from './ProfileInfoContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './profile.module.css'
import bgim from '../../assets/images/wall-white.jpg'


// const backgroundImage =
//     'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';



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