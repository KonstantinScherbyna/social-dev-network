import styles from "./profileData.module.css"

const Contact = ({ contactTitle, contactValue }: { contactTitle: string, contactValue: string | null }) => {
    debugger
    return <div className={styles._contactItem}>
        <div className={styles._itemTitle}>{contactTitle}:</div>
        <div className={styles._itemField}>{contactValue}</div>
    </div >

}

export default Contact