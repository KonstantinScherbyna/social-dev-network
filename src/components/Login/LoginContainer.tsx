import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hook";

import Login from "./Login";

// loginForm
const LoginContainer = () => {

    const errorCodeFromAPI = useAppSelector((store) => store.auth.isError)
    const errorMessageFromAPI = useAppSelector((store) => store.auth.errorMessage)
    const captchaFromAPI = useAppSelector((store) => store.auth.captcha)
    const isAuth = useAppSelector((store) => store.auth.isAuth)


    if (isAuth) {
        return <Navigate to="/profile" />
    } return <div>
        <Login errorCodeFromAPI={errorCodeFromAPI} 
        errorMessageFromAPI={errorMessageFromAPI} 
        captchaFromAPI={captchaFromAPI} />
    </div>
}

export default LoginContainer