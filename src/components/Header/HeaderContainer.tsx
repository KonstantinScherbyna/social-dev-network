import { useAppDispatch, useAppSelector } from '../../hook';
import { logout } from '../../redux/auth-reducer-slice';
import Header from './Header';

// wrapper
const HeaderContainer = (props: any) => {

    let dispatch = useAppDispatch()
    const authStore = useAppSelector((store) => store.auth)

    const logoutF = () => {
        debugger
        dispatch(logout())
    }

    return <>
        <Header isAuth={authStore.isAuth} login={authStore.login} logout={logoutF} />
    </>

}


export { HeaderContainer }