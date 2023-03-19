import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { purple } from '@mui/material/colors';
import Navbar from '../Navbar/Navbar';
import theme from '../../theme';
import theme2 from '../../theme2';
import { ThemeProvider } from '@mui/material/styles';
import styles from './header.module.css'
import { Zoom } from '@mui/material';



const Header = ({ isAuth, login, logout }: { isAuth: boolean, login: string | null, logout: () => void }) => {


    const [nav, setNav] = useState(false)


    return (<div className={styles._header}>
        {/* <AppBar position="fixed" sx={{ display: 'flex', width: '100%', flexGrow: 1, bgcolor: '#3e2723', color: '#bcaaa4' }} > */}
        <div className={styles._container}>
            {isAuth ? <nav className={styles._body}>
                <div className={
                    nav ? [styles._Navbar, styles.active].join(' ') : styles._Navbar
                }>
                    <Navbar />
                </div>

                <div className={styles._loginName}>
                    {login}
                </div>

                <div onClick={() => setNav(!nav)} className={styles._burger}>
                    {/* <button></button> */}
                    {nav ? <CloseIcon sx={{
                        fontSize: '30px',
                        color: '#bcaaa4',
                        transition: '1',
                        "&:hover": {
                            color: 'rgb(128, 157, 252)'
                        }
                    }} /> : <MenuIcon sx={{
                        fontSize: '30px', color: '#bcaaa4', "&:hover": {
                            color: 'rgb(128, 157, 252)'
                        }
                    }} />}
                </div>
                :
                <div className={styles._logout}>
                    <button onClick={logout} className={styles._buttonLogout}>Log Out</button>
                </div>

            </nav> : <nav className={styles._body}>

                <a href='' className={styles._login} >Login</a>

            </nav>
            }
        </div>
        {/* </AppBar > */}
    </div >
    )
}

export default Header;