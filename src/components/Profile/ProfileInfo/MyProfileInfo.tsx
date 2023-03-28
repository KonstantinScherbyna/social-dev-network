import userPhoto from '../../../assets/images/captain-america.jpg'
import ProfileDataForm from '../ProfileDataForm/ProfileDataForm';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Avatar } from '@mui/material';
import { IMyProfileInfoProps } from '../../../types/types'
import MyProfileData from '../ProfileData/MyProfileData';
import styles from './profileInfo.module.css'

const MyProfileInfo = ({ onMainPhotoSelected, profileErr, profile, myId, editMode }: IMyProfileInfoProps) => {
    return <div className={styles.body}>
        <div className={styles.mediaData}>
            <div className={styles.avatar}>
                <Avatar
                    variant="rounded"
                    alt="User"
                    src={profile.photos?.large || userPhoto}
                    sx={{
                        width: 250,
                        height: 250,
                        border: 2,
                        borderColor: 'primary',
                    }} />
            </div>
            <div className={styles.iconButton}>
                {myId &&
                    <IconButton
                        sx={{
                            color: '#3e2723',
                            "&:hover": {
                                backgroundColor: 'rgb(128, 157, 252, 0.5)'
                            }
                        }}
                        aria-label="upload picture"
                        component="label">
                        <input
                            type={"file"}
                            onChange={onMainPhotoSelected}
                            hidden accept="image/*"
                        />
                        <PhotoCamera />
                    </IconButton>
                }
            </div>
        </div>

        <div className={styles.ProfileData}>
            {editMode ? <ProfileDataForm /> : <MyProfileData profile={profile} myId={myId} err={profileErr} />}
        </div>
    </div>


}


export default MyProfileInfo;