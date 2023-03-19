import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { login } from "../../redux/auth-reducer-slice";
import { ILogin } from "../../types/types";
import LoginForm from "./LoginForm";
// import "./styles.css";

// loginForm
const Login = ({ errorCodeFromAPI, errorMessageFromAPI, captchaFromAPI }: ILogin) => {

    return <div>
        <LoginForm
            errorCodeFromAPI={errorCodeFromAPI}
            errorMessageFromAPI={errorMessageFromAPI}
            captchaFromAPI={captchaFromAPI} />
    </div>
}





export default Login