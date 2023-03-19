import React from 'react';
// import s from './Navbar.module.css';
// import { Link, NavLink } from "react-router-dom";
import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { useAppSelector } from '../../hook';
import theme2 from '../../theme2';
import { ThemeProvider } from '@mui/material/styles';
import styles from './navbar.module.css'
import News from '../News/News';

const Navbar = (props: any) => {

    let myPhoto = useAppSelector(store => store.profilePage.myProfile.photos)
    const loginName = useAppSelector((store) => store.auth.login)

    // const toLink = () => {
    //     return (

    //       "/profile"


    //     );
    // }

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
        <a href="/dialogs" className={styles._dialogs}>
            Dialogs
        </a  >
        <a href="/chat" className={styles._chat}>
            Chat
        </a>
        <a href="/users" className={styles._users} >
            Users
        </a>
    </nav >
}

export default Navbar;