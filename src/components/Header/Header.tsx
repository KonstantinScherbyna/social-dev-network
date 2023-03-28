import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../Navbar/Navbar';
import styles from './header.module.css'
import { NavLink } from 'react-router-dom';


const Header = ({ isAuth, login, logout }: { isAuth: boolean, login: string | null, logout: () => void }) => {

    const [nav, setNav] = useState(false)

    return (<div className={styles._header}>
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

                <NavLink to='' className={styles._login}>Login</NavLink>

            </nav>
            }
        </div>
    </div >
    )
}

export default Header;