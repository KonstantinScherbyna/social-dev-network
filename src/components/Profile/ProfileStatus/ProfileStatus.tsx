import styles from './profileStatus.module.css'
// import Input from "../../input"


// status of user on a page
const ProfileStatus = (props: any) => {


    return <div className={styles._statusBody}>
        {!props.editMode && <div className={styles._item}>
            <div className={styles._itemTitle}>Status :</div>
            <div className={styles._itemField}
                onDoubleClick={props.activateEditMode}>{props.userStatus || "Hey! I'm your staus"}</div>
        </div>
        }
        {props.editMode && <div>
            <input onChange={props.onStatusChange} value={props.status} autoFocus={true} onBlur={props.deactivateEditMode} placeholder="Hey! I'm your staus" />
            {/* < Input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} placeholder="Hey! I'm your staus" /> */}
        </div>}
    </div>

}

export default ProfileStatus