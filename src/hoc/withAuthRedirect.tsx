import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hook";

export const withAuthRedirect = (Component: (props: any) => JSX.Element) => {
    let RouterComponent = () => {
        let isAuth = useAppSelector(store => store.auth.isAuth)
        if (!isAuth) return <Navigate to={`/login`} />
        return <Component />
    }
    return RouterComponent;
}
