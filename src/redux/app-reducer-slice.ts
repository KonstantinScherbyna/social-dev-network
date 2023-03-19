import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IinitialStateApp } from "../types/types";
import { getAuthUserData } from "./auth-reducer-slice";
import { getMyProfile } from "./profile-reducer-slice";

// whaiting responses of all fetches to API and then show App
export const initializeApp = createAsyncThunk<void, void>(
    'authReducerSlice/getAuthUserData', async (_, { dispatch }) => {

        await dispatch(getAuthUserData())

        dispatch(initializing(true))


    }
)

const initialState: IinitialStateApp = {
    initialized: false
}
const appReducerSlice = createSlice({
    name: 'appReducerSlice',
    initialState,
    reducers: {
        initializing(state, action: PayloadAction<boolean>) {
            state.initialized = action.payload
        },
    }
})

export default appReducerSlice.reducer
export const { initializing } = appReducerSlice.actions