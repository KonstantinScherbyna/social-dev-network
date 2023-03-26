import axios from "axios"
import { IapiResponseResult, IprofileInfo } from "../types/types";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "a11c1b6e-985d-42c3-9af2-d65c3bcf4ccb" }
});



export const profileAPI = {
    // fetch another profile from server
    getProfile(userId: number | null): Promise<IprofileInfo> {
        return instance.get(`profile/${userId}`)
            .then(response => { return response.data })
    },

    // fetch my profile to server
    getMyProfile(myId: number | null): Promise<IprofileInfo> {
        return instance.get(`profile/${myId}`)
            .then(response => { return response.data })
    },

    // fetch profile status from server
    getStatus(userId: number | null): Promise<string> {
        debugger
        return instance.get(`profile/status/${userId}`)
            .then(response => { return response.data })
    },

    // send my profile status to server
    updateStatus(status: string | null): Promise<IapiResponseResult> {
        return instance.put(`profile/status`, { status })
            .then(response => { return response.data })
    },

    // send my Photo to server
    savePhoto(photoFile: File): Promise<IapiResponseResult> {
        const formData = new FormData();
        formData.append("image", photoFile)

        debugger
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => { return response.data })
    },

    // send personal info to server
    updateProfileInfo(profileInfo: IprofileInfo | null): Promise<IapiResponseResult> {
        debugger
        return instance.put(`profile/`, profileInfo)
            .then(response => { return response.data })
    },

}