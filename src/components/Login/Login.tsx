import { ILogin } from "../../types/types";
import LoginForm from "./LoginForm";

// loginForm
const Login = ({ errorCodeFromAPI, errorMessageFromAPI, captchaFromAPI }: ILogin) => {

    return (
        <div>
            <LoginForm
                errorCodeFromAPI={errorCodeFromAPI}
                errorMessageFromAPI={errorMessageFromAPI}
                captchaFromAPI={captchaFromAPI} />
        </div>
    )
}

export default Login