import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from '../ProfileDataForm/ProfileDataForm';
import ProfileData from '../ProfileData/ProfileData';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Avatar, Box } from '@mui/material';
import { IProfileInfoProps } from '../../../types/types'
import { ThemeProvider } from '@mui/material/styles';
import theme2 from '../../../theme2';
import styles from './profileInfo.module.css'

const ProfileInfo = ({ profileErr, profile }: IProfileInfoProps) => {
    debugger
    return (<ThemeProvider theme={theme2}>
        <div className={styles._profileInfo_body}>
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
            <ProfileData profile={profile} err={profileErr} />
        </div>
    </ThemeProvider>
    )

}


export default ProfileInfo;