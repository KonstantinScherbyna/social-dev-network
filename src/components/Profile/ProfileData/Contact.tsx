import styles from "./profileData.module.css"

const Contact = ({ contactTitle, contactValue }: { contactTitle: string, contactValue: string | null }) => {
    
    return <div className={styles.contactItem}>
        <div className={styles.itemTitle}>{contactTitle}:</div>
        <div className={styles.itemField}>{contactValue}</div>
    </div >

}

export default Contact