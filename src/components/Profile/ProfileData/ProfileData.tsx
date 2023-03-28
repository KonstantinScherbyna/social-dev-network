import { Iconstacts, IprofileInfo } from '../../../types/types';
import styles from './profileData.module.css'
import ProfileStatusContainer from '../ProfileStatus/ProfileStatusContainer';
import Contact from './Contact';


// info about user
const ProfileData = ({ profile, err }: { profile: IprofileInfo, err: string | null }) => {

    debugger
    return <div className={styles.items}>
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
    </div >
}


export default ProfileData;