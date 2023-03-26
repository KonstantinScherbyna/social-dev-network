import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsResult } from "../types/types";


export const setNews = createAction<INewsResult>('newsReducerSlice')
export const toggleIsFetching = createAction<any>('newsReducerSlice')


const initialState: INewsResult = {
    status: '',
    totalResults: 0,
    articles: [],
}
const newsReducerSlice = createSlice({
    name: 'newsReducerSlice',
    initialState,
    reducers: {
    }, extraReducers(builder) {
        builder
            .addCase(setNews, (state, action: PayloadAction<INewsResult>) => {

                state.articles = action.payload.articles
                state.totalResults = action.payload.totalResults
                state.status = action.payload.status

            })
    },
})

export default newsReducerSlice.reducer