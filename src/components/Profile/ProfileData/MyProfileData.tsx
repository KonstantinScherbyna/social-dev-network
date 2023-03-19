import React from 'react';
import { setEditMode } from '../../../redux/profile-reducer-slice';
import s from './ProfileInfo.module.css';
import { useDispatch } from 'react-redux';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import { Iconstacts, IprofileInfo } from '../../../types/types';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import theme2 from '../../../theme2';
import { ThemeProvider } from '@mui/material/styles';
import styles from './profileData.module.css'
import ProfileStatusContainer from '../ProfileStatus/ProfileStatusContainer';
import Contact from './Contact';



// info about user
const MyProfileData = ({ profile, myId, err }: { profile: IprofileInfo, myId: number, err: string | null }) => {

    const dispatch = useDispatch()

    debugger
    return <div className={styles._items}>
        <div className={styles._edit}>
            {myId && <button onClick={() => dispatch(setEditMode(true))} className={styles._editButton}>Edit</button>}
        </div>
        <div className={styles._content}>
            <div className={styles._item}>
                <p className={styles._itemTitle}>Full Name:</p>
                <p className={styles._itemField}>
                    {profile.fullName}
                </p>
            </div>
            <div className={styles._item}>
                <p className={styles._itemTitle}>Looking for a Job:</p>
                <p className={styles._itemField}>
                    {profile.lookingForAJob ? "yes" : "no"}
                </p>
            </div>
            <div className={styles._item}>
                <p className={styles._itemTitle}>My professional skills:</p>
                <p className={styles._itemField}>
                    {profile.lookingForAJobDescription}
                </p>
            </div>
            <div className={styles._item}>
                <p className={styles._itemTitle}>About me:</p>
                <p className={styles._itemField}>
                    {profile.aboutMe}
                </p>
            </div>
            <div className={styles._item}>
                <p className={styles._itemTitle}>Contacts:</p>
                <div className={styles._contactsItems}>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={profile.contacts[key as keyof Iconstacts]}
                        />
                    })}
                </div>
            </div>
        </div>
        <div className={styles._ProfileStatusContainer}>
            <ProfileStatusContainer />
        </div>
        <div className={styles._error}>
            {err && <div>{err}</div>}
        </div>
    </div >
}

// const Contact = ({ contactTitle, contactValue }: { contactTitle: string, contactValue: string | null }) => {

//     return <div>
//         {contactTitle}:{contactValue}
//     </div >

// }

export default MyProfileData;