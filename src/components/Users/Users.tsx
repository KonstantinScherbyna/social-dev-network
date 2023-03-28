import { IusersProps } from '../../types/types';
import Paginator from '../common/Paginator/Paginator';
import { ThemeProvider } from '@mui/material';
import UserContainer from './UserContainer';
import UsersSearchFormContainer from './UsersSearchFormContainer';
import theme2 from '../../theme2';
import styles from './users.module.css'

// Component of Users
let Users = (props: IusersProps) => {

    return (<ThemeProvider theme={theme2}>
        <div className={styles.users}>
            <div className={styles.UsersSearchFormContainer}>
                <UsersSearchFormContainer />
            </div>
            <div className={styles.Paginator}>
                <Paginator
                    currentPage={props.pageNumber}
                    totalItemsCount={props.totalItemsCount}
                    pageSize={props.pageSize}
                    filter={props.filter}
                />
            </div>
            <div className={styles.userContainers}>
                {props.users.map(u =>
                    <div className={styles.UserContainer} key={u.id}>
                        <UserContainer user={u} followingInProgress={props.followingInProgress} />
                    </div>)
                }
            </div>
        </div>
    </ThemeProvider >
    )
}



export default Users;