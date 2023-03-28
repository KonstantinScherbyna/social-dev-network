import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hook';
import styles from './navbar.module.css'

const Navbar = () => {

    let myPhoto = useAppSelector(store => store.profilePage.myProfile.photos)
    const loginName = useAppSelector((store) => store.auth.login)

    return <nav className={styles._navbar}>
        <NavLink to="/news" className={styles._news}>
            News
        </NavLink>
        <div className={styles._avatart}>
            {myPhoto.small && <Avatar alt="KostyaSh" src={myPhoto.small as string} sx={{ width: 24, height: 24 }} />}
        </div>
        <NavLink to="/profile" className={styles._profile}>
            {loginName}
        </NavLink>
        <NavLink to="/chat" className={styles._chat}>
            Chat
        </NavLink>
        <NavLink to="/users" className={styles._users} >
            Users
        </NavLink>
    </nav >
}

export default Navbar;