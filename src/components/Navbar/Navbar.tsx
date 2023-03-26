import Avatar from '@mui/material/Avatar';
import { useAppSelector } from '../../hook';
import styles from './navbar.module.css'

const Navbar = () => {

    let myPhoto = useAppSelector(store => store.profilePage.myProfile.photos)
    const loginName = useAppSelector((store) => store.auth.login)

    return <nav className={styles._navbar}>
        <a href="/news" className={styles._news}>
            News
        </a>
        <div className={styles._avatart}>
            {myPhoto.small && <Avatar alt="KostyaSh" src={myPhoto.small as string} sx={{ width: 24, height: 24 }} />}
        </div>
        <a href="/profile" className={styles._profile}>
            {loginName}
        </a>
        <a href="/chat" className={styles._chat}>
            Chat
        </a>
        <a href="/users" className={styles._users} >
            Users
        </a>
    </nav >
}

export default Navbar;