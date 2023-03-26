import { configureStore } from "@reduxjs/toolkit";
import profileReducerSlice from "./profile-reducer-slice";
import dialogsReducerSlice from "./dialogs-reducer-slice";
import authReducerSlice from "./auth-reducer-slice";
import usersReducerSlice from "./users-reducer-slice";
import appReducerSlice from "./app-reducer-slice";
import chatReducerSlice from "./chat-reducer-slice";
import { newsAPI } from "../api/news-api";
import newsReducerSlice from "./news-reducer-slice";

let store = configureStore({
    reducer: {
        auth: authReducerSlice,
        profilePage: profileReducerSlice,
        dialogsPage: dialogsReducerSlice,
        usersPage: usersReducerSlice,
        app: appReducerSlice,
        chat: chatReducerSlice,
        [newsAPI.reducerPath]: newsAPI.reducer,
        news: newsReducerSlice,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsAPI.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;