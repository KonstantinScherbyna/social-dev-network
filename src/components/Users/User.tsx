import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/captain-america.jpg'
import theme2 from '../../theme2'
import { Iusers } from '../../types/types'
import { ThemeProvider } from '@mui/material/styles';
import styles from './users.module.css'


let User = ({ user, followingInProgress, follow, unfollow }: { user: Iusers, followingInProgress: number[], follow: (uid: number) => void, unfollow: (uid: number) => void }) => {

    return <ThemeProvider theme={theme2}>
        <div className={styles.page}>
            <div className={styles.user}>
                <div className={styles.avatar}>
                    <NavLink to={`/profile/${user.id}`} className={styles.image}>
                        <img
                            alt={user.name as string}
                            src={user.photos.small ? user.photos.small : userPhoto}
                        />
                    </NavLink>
                </div>
                <div className={styles.buttons}>
                    {user.followed
                        ? <Button
                            sx={{
                                mt: 0.5, color: 'secondary', bgcolor: 'primary', '&:hover': {
                                    bgcolor: 'success',
                                },
                            }}
                            variant="contained"
                            size='small'
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}
                        >
                            Unfollow
                        </Button>
                        : <Button
                            sx={{
                                mt: 0.5, color: 'secondary', bgcolor: 'primary', '&:hover': {
                                    bgcolor: 'success',
                                },
                            }}
                            variant="contained"

                            size='small'
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}
                        >
                            Follow
                        </Button>}
                </div>
            </div>
            <div className={styles.nameNstatus}>
                <div className={styles.name}>
                    {user.name}
                </div>
                <div className={styles.status}>
                    {user.status}
                </div>
            </div>
        </div >
    </ThemeProvider >
}

export default User