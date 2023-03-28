import { setEditMode } from '../../../redux/profile-reducer-slice';
import { useDispatch } from 'react-redux';
import { Iconstacts, IprofileInfo } from '../../../types/types';
import styles from './profileData.module.css'
import ProfileStatusContainer from '../ProfileStatus/ProfileStatusContainer';
import Contact from './Contact';


// info about user
const MyProfileData = ({ profile, myId, err }: { profile: IprofileInfo, myId: number, err: string | null }) => {

    const dispatch = useDispatch()

    return <div className={styles.items}>
        <div className={styles.edit}>
            {myId && <button onClick={() => dispatch(setEditMode(true))} className={styles.editButton}>Edit</button>}
        </div>
        <div className={styles.content}>
            <div className={styles.item}>
                <p className={styles.itemTitle}>Full Name:</p>
                <p className={styles.itemField}>
                    {profile.fullName}
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.itemTitle}>Looking for a Job:</p>
                <p className={styles.itemField}>
                    {profile.lookingForAJob ? "yes" : "no"}
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.itemTitle}>My professional skills:</p>
                <p className={styles.itemField}>
                    {profile.lookingForAJobDescription}
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.itemTitle}>About me:</p>
                <p className={styles.itemField}>
                    {profile.aboutMe}
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.itemTitle}>Contacts:</p>
                <div className={styles.contactsItems}>
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
        <div className={styles.ProfileStatusContainer}>
            <ProfileStatusContainer />
        </div>
        <div className={styles.error}>
            {err && <div>{err}</div>}
        </div>
    </div >
}

export default MyProfileData;