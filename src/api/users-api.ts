import axios from "axios"
import { IapiResponseResult, IUsersFilter } from "../types/types";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "a11c1b6e-985d-42c3-9af2-d65c3bcf4ccb" }
});

export const usersAPI = {
    
    getUsersPage(pageSize: number = 10, pageNumber: number, usersFilter: IUsersFilter): Promise<any> {
        
        return instance.get(`users?count=${pageSize}&page=${pageNumber}&term=${usersFilter.term}` + (usersFilter.friend === null ? '' : `&friend=${usersFilter.friend}`))
            .then(response => { return response.data })
    },

    // unsubscribe from user
    deleteUserSubscribe(uId: number | null): Promise<IapiResponseResult> {
        return instance.delete(`follow/${uId}`)
            .then(response => { return response.data })
    },

    // subscribe to user
    addUserSubscribe(uId: number | null): Promise<IapiResponseResult> {
        
        return instance.post(`follow/${uId}`)
            .then(response => { return response.data })
    },

}