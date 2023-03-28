import styles from './profileStatus.module.css'

// status of user on a page
const ProfileStatus = (props: any) => {


    return <div className={styles.statusBody}>
        {!props.editMode && <div className={styles.item}>
            <div className={styles.itemTitle}>Status :</div>
            <div className={styles.itemField}
                onDoubleClick={props.activateEditMode}>{props.userStatus || "Hey! I'm your staus"}</div>
        </div>
        }
        {props.editMode && <div>
            <input onChange={props.onStatusChange} value={props.status} autoFocus={true} onBlur={props.deactivateEditMode} placeholder="Hey! I'm your staus" />
        </div>}
    </div>

}

export default ProfileStatus