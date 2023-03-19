import { Grid } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/captain-america.jpg'
import theme2 from '../../theme2'
import { Iusers } from '../../types/types'
import { ThemeProvider } from '@mui/material/styles';
import styles from './users.module.css'


let User = ({ user, followingInProgress, follow, unfollow }: { user: Iusers, followingInProgress: number[], follow: (uid: number) => void, unfollow: (uid: number) => void }) => {

    return <ThemeProvider theme={theme2}>
        <div className={styles._page}>
            <div className={styles._user}>
                <div className={styles._avatar}>
                    <NavLink to={`/profile/${user.id}`} className={styles._image}>
                        <img
                            alt={user.name as string}
                            src={user.photos.small ? user.photos.small : userPhoto}
                        />
                    </NavLink>
                </div>
                <div className={styles._buttons}>
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
            <div className={styles._nameNstatus}>

                <div className={styles._name}>
                    {user.name}
                </div>
                <div className={styles._status}>
                    {user.status}

                </div>
            </div>
        </div >
    </ThemeProvider >

    // return (<ThemeProvider theme={theme2}>
    //     <div className={styles._user}
    //         container spacing={2}>
    //         <Grid
    //             item xs={2}>
    //             <NavLink to={`/profile/${user.id}`}>
    //                 <Avatar
    //                     variant="square"
    //                     alt={user.name as string}
    //                     src={user.photos.small ? user.photos.small : userPhoto}
    //                     sx={{ width: 150, height: 150, mx: 1 }}

    //                 />
    //             </NavLink>
    //             <Box>
    //                 {user.followed
    //                     ? <Button
    //                         sx={{
    //                             ml: 7.5, mt: 0.5, color: 'secondary', bgcolor: 'primary', '&:hover': {
    //                                 bgcolor: 'success',
    //                             },
    //                         }}
    //                         variant="contained"
    //                         size='small'
    //                         disabled={followingInProgress.some(id => id === user.id)}
    //                         onClick={() => { unfollow(user.id) }}
    //                     >
    //                         Unfollow
    //                     </Button>
    //                     : <Button
    //                         sx={{
    //                             ml: 10, mt: 0.5, color: 'secondary', bgcolor: 'primary', '&:hover': {
    //                                 bgcolor: 'success',
    //                             },
    //                         }}
    //                         variant="contained"

    //                         size='small'
    //                         disabled={followingInProgress.some(id => id === user.id)}
    //                         onClick={() => { follow(user.id) }}
    //                     >
    //                         Follow
    //                     </Button>}
    //             </Box>
    //         </Grid>
    //         <Grid item xs={10}>
    //             <Box>{user.name}</Box>
    //             <Box>{user.status}</Box>
    //         </Grid>

    //     </div>
    // </ThemeProvider>
    // )

}

export default User