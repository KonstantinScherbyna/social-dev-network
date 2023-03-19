import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authAPI } from "../api/auth-api";
import { IinitialStateAuth, ImyAuthData, ResultCodeForCaptch, ResultCodesEnum } from "../types/types";
import { getMyProfile } from "./profile-reducer-slice";


//TODO fix dublicats

// Fetch to API for take authentification data, 
// if resultCode = 0 all works as planed
// dispatch {id, login, email} to a reducer 
// dispatch 'getMyProfile' for fetch MyProfile from API

export const getAuthUserData = createAsyncThunk<number, void>(
    'authReducerSlice/getAuthUserData', async (_, { dispatch }) => {

        const userData = await authAPI.authAPIMe()
        const { id, login, email } = userData.data

        if (userData.resultCode === ResultCodesEnum.Success) {
            dispatch(setUserDataAction({
                id: id, login: login, email: email, isAuth: true,
                isError: false, errorMessage: null,
            }))
            dispatch(getMyProfile(id))
        }
        return userData.resultCode
    }
)


// Send to API authentification datas. 
// If response resultcode = 0, fetching authentification data from API
// If response resultcode = 10 create 'get' request to API for captcha
// If response resultcode another it means error and we clearup authentification data in state
export const login = createAsyncThunk<void, ImyAuthData>(
    'authReducerSlice/login', async (data, { dispatch }) => {

        const { email, password, rememberMe } = data
        const logIn = await authAPI.authAPILogIn(email, password, rememberMe)

        if (logIn.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData())
        } else if (logIn.resultCode === ResultCodeForCaptch.CaptchaIsRequired) {
            dispatch(getCaptchaUrlThunk())
        } else {
            dispatch(setUserDataAction({
                id: null, login: null, email: null, isAuth: false,
                isError: true, errorMessage: logIn.messages,
            }))
        }
    }
)


export const logout = createAsyncThunk<void, void>(
    'authReducerSlice/logout', async (_, { dispatch }) => {
        const logOut = await authAPI.authAPILogOut()

        if (logOut.resultCode === 0) {

            dispatch(setUserDataAction(initialState))
        }
    }
)

// fetch Captch for login
export const getCaptchaUrlThunk = createAsyncThunk<void, void>(
    'authReducerSlice/getCaptchaUrlThunk', async (_, { dispatch }) => {

        const result_getCaptchaUrl = await authAPI.getCaptchaUrl()
        dispatch(setUserDataAction({
            id: null, login: null, email: null, isAuth: false,
            isError: false, errorMessage: null, captcha: result_getCaptchaUrl
        }))
    }
)



const initialState: IinitialStateAuth = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isError: false,
    errorMessage: null,
    captcha: null,
}

const authReducerSlice = createSlice({
    name: 'authReducerSlice',
    initialState,
    reducers: {
        setUserDataAction(state, action: PayloadAction<IinitialStateAuth>) {

            state.id = action.payload.id
            state.login = action.payload.login
            state.email = action.payload.email
            state.isAuth = action.payload.isAuth
            state.isError = action.payload.isError
            state.errorMessage = action.payload.errorMessage
            state.captcha = action.payload.captcha
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(getAuthUserData.fulfilled, (state, action: any) => {
    //         state.id = action.payload.id
    //         state.login = action.payload.login
    //         state.email = action.payload.email
    //         
    //     }),
    //         builder.addCase(login.fulfilled, (state, { payload }) => {
    //             // id: null, login: null, email, isAuth: true, isError: false, errorMessage: logIn.messages, captchaObj: { captcha: null }
    //             state.id = payload.id
    //             state.login = payload.login
    //             state.email = payload.email
    //         })
    // }
})

export default authReducerSlice.reducer
export const { setUserDataAction } = authReducerSlice.actions
