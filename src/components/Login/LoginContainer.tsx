import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { login } from "../../redux/auth-reducer-slice";
import Login from "./Login";
// import "./styles.css";

// loginForm
const LoginContainer = () => {

    const errorCodeFromAPI = useAppSelector((store) => store.auth.isError)
    const errorMessageFromAPI = useAppSelector((store) => store.auth.errorMessage)
    const captchaFromAPI = useAppSelector((store) => store.auth.captcha)
    const isAuth = useAppSelector((store) => store.auth.isAuth)


    if (isAuth) {
        return <Navigate to="/profile" />
    } return <div>
        <Login errorCodeFromAPI={errorCodeFromAPI} errorMessageFromAPI={errorMessageFromAPI} captchaFromAPI={captchaFromAPI} />
    </div>
}







export default LoginContainer