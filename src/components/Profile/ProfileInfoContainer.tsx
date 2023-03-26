import { useEffect } from 'react';
import { getStatus, savePhoto, getAnotherProfile, getMyProfile } from '../../redux/profile-reducer-slice';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Backdrp from '../common/Preloader/BackDrop';
import MyProfileInfo from './ProfileInfo/MyProfileInfo';
import styles from './profile.module.css'

const ProfileInfoContainer = (props: any) => {

    const dispatch = useAppDispatch()
    let { userId } = useParams()

    const profile = useAppSelector((state) => state.profilePage.profile)
    const myProfile = useAppSelector((state) => state.profilePage.myProfile)
    const profileErr = useAppSelector((state) => state.profilePage.error)
    const myId = useAppSelector((state) => state.auth.id)

    // const profilePhoto = useSelector((state) => state.profilePage.profile.photos)
    const editMode = useAppSelector((state) => state.profilePage.editMode)

    // dispatch thunks for get profile page
    useEffect(() => {
        if (userId) {
            dispatch(getAnotherProfile(parseInt(userId)))
        } else {
            dispatch(getMyProfile(myId))
        }
    }, [userId, myId])


    // dispatch thunks for get profile status
    useEffect(() => {
        if (userId) {
            dispatch(getStatus(parseInt(userId)))
        } else {
            dispatch(getStatus(myId))
        }
    }, [userId, myId])


    // dispatch thunk with selected image file to api
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    if (!profile || !myId) {
        return <Backdrp />
    }
    if (userId) {
        return <div className={styles._ProfileInfo}>
            <ProfileInfo
                onMainPhotoSelected={onMainPhotoSelected}
                profileErr={profileErr}
                profile={profile} />
        </div>
    } return <div className={styles._MyProfileInfo}>
        <MyProfileInfo
            onMainPhotoSelected={onMainPhotoSelected}
            profileErr={profileErr}
            profile={myProfile}
            myId={myId}
            editMode={editMode} />
    </div>
}


export default ProfileInfoContainer