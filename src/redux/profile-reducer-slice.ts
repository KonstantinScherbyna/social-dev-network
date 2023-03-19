import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { profileAPI } from "../api/profile-api";

import { IinitialStateProfile, InewPost, IprofileInfo, ResultCodesEnum } from "../types/types";

// request to get ANOTHER profile Page from API by 'userId' from useParams
// dispatch another profile page data to reducer
export const getAnotherProfile = createAsyncThunk<any, number | null>(
    'profileReducerSlice/getAnotherProfile', async (userId, { rejectWithValue, dispatch }) => {
        try {
            dispatch(toggleIsFetchingAction(true))
            const getAnotherProfileUserId = await profileAPI.getProfile(userId)

            dispatch(toggleIsFetchingAction(false))
            dispatch(setUserProfileAction(getAnotherProfileUserId))
            dispatch(getStatus(userId))
        } catch (err: any) {
            return rejectWithValue(err.response.data)
        }
    }
)



// request to get MY profile Page from API by 'userId' from useParams
// dispatch my profile page data to reducer
export const getMyProfile = createAsyncThunk<any, number | null>(
    'profileReducerSlice/getMyProfile', async (myId, { rejectWithValue, dispatch }) => {

        dispatch(toggleIsFetchingAction(true))
        const getMyProfileUserId: IprofileInfo = await profileAPI.getMyProfile(myId)
        dispatch(toggleIsFetchingAction(false))
        dispatch(setMyProfileAction(getMyProfileUserId))
        dispatch(getStatus(myId))
    }
)

// request to get profile status from API.
// dispatch received status to reducer
export const getStatus = createAsyncThunk<any, number | null>(
    'profileReducerSlice/getStatus', async (userId, { rejectWithValue, dispatch }) => {

        const getStat = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(getStat))
    }
)


// sending status to API and dispatching the received status to reducer
export const updateStatus = createAsyncThunk<any, string>(
    'profileReducerSlice/updateStatus', async (status, { rejectWithValue, dispatch }) => {

        const resultCodeStatus = await profileAPI.updateStatus(status)
        if (resultCodeStatus.resultCode === ResultCodesEnum.Success) {
            dispatch(setUserStatus(status))
        }
    }
)

// sending Photo to API and dispatching the received Photo to reducer
export const savePhoto = createAsyncThunk<void | string, File>(
    'profileReducerSlice/savePhoto', async (photoFile, { rejectWithValue, dispatch }) => {
        debugger
        const resultCodeProfilePhoto = await profileAPI.savePhoto(photoFile)
        debugger
        if (resultCodeProfilePhoto.resultCode === ResultCodesEnum.Success) {
            dispatch(setProfilePhotos(resultCodeProfilePhoto.data.photos))
        }

    }
)



// sending my profile status to API and dispatching the status to reducer
export const myProfileInfoThunk = createAsyncThunk<any, any>(
    'profileReducerSlice/profileInfoData', async (profileInfo, { rejectWithValue, dispatch }) => {
        debugger

        const resultCodeProfileInfo = await profileAPI.updateProfileInfo(profileInfo.data)
        debugger
        if (resultCodeProfileInfo.resultCode === ResultCodesEnum.Success) {
            dispatch(setEditMode(false))
            dispatch(getMyProfile(profileInfo.myid))
        }

    }
)



const initialState: IinitialStateProfile = {
    isFetching: false,
    myProfile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            github: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: '',
        },
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: ''
        },
        userId: null
    },
    profile: {
        aboutMe: '',
        contacts: {
            facebook: null,
            github: null,
            instagram: null,
            mainLink: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null,
        },
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: ''
        },
        userId: null
    },
    status: '',
    posts: [],
    editMode: false,
    error: null
}

const profileReducerSlice = createSlice({
    name: "profileReducerSlice",
    initialState,
    reducers: {
        addPostAction(state, action) {

            let id = state.posts.map(p => p.id)
            let idU: any = id.slice(-1)

            let newPost: InewPost = {
                id: ++idU,
                message: action.payload,
              
            };

            state.posts.push(newPost)
        },
        deletePostAction(state, action) {
            state.posts = state.posts.filter(p => p.id !== action.payload)
        },
        toggleIsFetchingAction(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload
        },
        setUserProfileAction(state, action: PayloadAction<IprofileInfo>) {
            state.profile = action.payload
        },
        setMyProfileAction(state, action: PayloadAction<IprofileInfo>) {
            state.myProfile = action.payload
        },
        setUserStatus(state, action: PayloadAction<string>) {
            state.status = action.payload
        },
        setProfilePhotos(state, action: PayloadAction<{ large: string, small: string }>) {
            state.myProfile.photos = action.payload
        },
        setEditMode(state, action: PayloadAction<boolean>) {
            state.editMode = action.payload
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
        }
    }
})

export default profileReducerSlice.reducer
export const {
    addPostAction,
    deletePostAction,
    toggleIsFetchingAction,
    setUserProfileAction,
    setMyProfileAction,
    setUserStatus,
    setProfilePhotos,
    setEditMode,
    setError } = profileReducerSlice.actions