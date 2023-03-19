import axios from "axios"
import { IapiResponseResult, IprofileInfo, IUsersFilter } from "../types/types";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "a11c1b6e-985d-42c3-9af2-d65c3bcf4ccb" }
});


export const authAPI = {
    // fetch autorized or not on server
    authAPIMe(): Promise<IapiResponseResult> {
        return instance.get(`auth/me`)
            .then(response => { return response.data })
    },

    authAPILogIn(email: string, password: string, rememberMe: boolean = false): Promise<IapiResponseResult> {
        debugger
        return instance.post(`auth/login`, { email, password, rememberMe })
            .then(response => { return response.data })
    },

    // unAuthorizeing from server
    authAPILogOut(): Promise<IapiResponseResult> {
        debugger
        return instance.delete(`auth/login`)
            .then(response => { return response.data })
    },

    // fetch captcha image from server
    getCaptchaUrl(): Promise<string> {
        return instance.get(`security/get-captcha-url`)
            .then(response => { return response.data })
    }
}