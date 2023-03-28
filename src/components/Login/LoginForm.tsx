import { Box, Button, Checkbox, IconButton, InputAdornment, styled, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hook";
import { login } from "../../redux/auth-reducer-slice";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import styles from "./login.module.css"


const CssTextField = styled(TextField)({
    '& label.MuiInputLabel-root': {
        color: '#33eaff'
    },
    '& label.Mui-focused': {
        color: '#33eaff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#9575cd',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: '#33eaff',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#33eaff',
        },
    },

});



// loginForm
const LoginForm = (props: any) => {

    const dispatch = useAppDispatch()


    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    console.log("errors", errors)

    const onSubmit = (data: any) => {
        dispatch(login(data))
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (<div className={styles.loginForm}>

        <div className={styles.loginFormBody}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Box sx={{ fontSize: 'h5.fontSize', color: "white", textAlign: 'center', pb: 16, pt: 2 }}>
                        Login
                    </Box>

                    <CssTextField sx={{ mb: 1 }} id="email" fullWidth variant="outlined" label="Email" type={"email"} {...register("email", {
                        required: "Please enter your email.",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address"
                        }
                    })} InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <EmailOutlinedIcon fontSize="small" />
                            </InputAdornment>
                        ), style: { fontWeight: 500 }
                    }} />
                </div>

                <div>
                    <CssTextField id="password" autoComplete="off" fullWidth variant="outlined" type={showPassword ? 'text' : 'password'} label="Password" {...register("password", { required: "Please enter your password.", minLength: { value: 4, message: "Minimal characters 4" } })}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <LockOutlinedIcon fontSize="small" />
                                </InputAdornment>
                            ), style: { fontWeight: 500 }
                        }}
                    />
                </div>

                <div >
                    <Checkbox color="default" sx={{ '&:hover': { color: '#33eaff', } }} {...register("rememberMe")} />

                    <Typography component={'span'} sx={{ fontSize: 13, }}>
                        Remember Me
                    </Typography>

                    <Box component={'span'} sx={{ ml: 13, }}>
                        <IconButton
                            aria-label="password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="small"
                            sx={{ '&:hover': { color: '#33eaff', }, }}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </Box >
                </div>

                <div className={styles.register}>
                    Don't have an acount
                    <a href="https://social-network.samuraijs.com/" target="blank">
                        Register
                    </a>
                </div>

                <div>
                    {props.errorCodeFromAPI && props.errorMessageFromAPI}
                </div>

                <div>{props.captchaFromAPI && <img src={props.captchaFromAPI} />}</div>

                <Button type="submit" variant="outlined" size="small" sx={{
                    width: '100%', height: '40px', borderRadius: '40px', color: 'black', bgcolor: "#9575cd", opacity: [0.9, 0.8, 0.9],
                    '&:hover': {
                        bgcolor: '#33eaff',
                    },
                }}>Login</Button>
            </form>
        </div >
    </div >
    )
}


export default LoginForm