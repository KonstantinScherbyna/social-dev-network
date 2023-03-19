import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsResult } from "../types/types";
import { getAuthUserData } from "./auth-reducer-slice";
import { getMyProfile } from "./profile-reducer-slice";
import { v1 } from 'uuid'


export const setNews = createAction<INewsResult>('newsReducerSlice')
export const toggleIsFetching = createAction<any>('newsReducerSlice')


const initialState: INewsResult = {
    status: '',
    totalResults: 0,
    articles: [],
    // isFetching: false

}
const newsReducerSlice = createSlice({
    name: 'newsReducerSlice',
    initialState,
    reducers: {
        // setNews(state, action: PayloadAction<IInitialstateNews>) {



        //     debugger
        //     state.data = action.payload.data
        //     state.error = action.payload.error
        //     state.isLoading = action.payload.isLoading
        //     debugger
        // },
    }, extraReducers(builder) {
        builder
            .addCase(setNews, (state, action: PayloadAction<INewsResult>) => {

                debugger
                state.articles = action.payload.articles
                state.totalResults = action.payload.totalResults
                state.status = action.payload.status

            })
            // .addCase(toggleIsFetching, (state, action) => {
            //     state.isFetching = action.payload
            // })
    },
})

export default newsReducerSlice.reducer
// export const { setNews } = newsReducerSlice.actions
// export const { setNews } = newsReducerSlice.actions