import { Iconstacts, IprofileInfo } from '../../../types/types';
import styles from './profileData.module.css'
import ProfileStatusContainer from '../ProfileStatus/ProfileStatusContainer';
import Contact from './Contact';


// info about user
const ProfileData = ({ profile, err }: { profile: IprofileInfo, err: string | null }) => {

    debugger
    return <div className={styles._items}>
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
            {Object.keys(profile.contacts).map(key => {
                return <Contact
                    key={key}
                    contactTitle={key}
                    contactValue={profile.contacts[key as keyof Iconstacts]}
                />
            })}
        </div>
        <div className={styles._ProfileStatusContainer}>
            <ProfileStatusContainer />
        </div>
    </div >
}


export default ProfileData;