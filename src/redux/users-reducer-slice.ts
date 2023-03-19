import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { usersAPI } from "../api/users-api"

import { IinitialStateUsers, Iusers, IUsersFilter } from "../types/types"


export const getUsersPage = createAsyncThunk<void, any>(
    'usersReducerSlice/fetchUsersPageSize', async (data, { rejectWithValue, dispatch }) => {
        debugger
        let  [pageNumber, pageSize, usersFilter]  = data
        debugger
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        dispatch(setFilter(usersFilter))

        const usersPage = await usersAPI.getUsersPage(pageSize, pageNumber, usersFilter)

        dispatch(toggleIsFetching(false))
        dispatch(setTotalUsersCount(usersPage.totalCount))
        dispatch(setUsers(usersPage.items))

    }
)



export const followThunk = createAsyncThunk<any, any>(
    'usersReducerSlice/follow', async (uid, { dispatch }) => {
        dispatch(toggleFollowingProgress({ isFetch: true, id: uid }))
        const r = await usersAPI.addUserSubscribe(uid)
        if (r.resultCode === 0) {
            dispatch(followUsers(uid))
        }
        dispatch(toggleFollowingProgress({ isFetch: false, id: uid }))
    }
)

export const unfollowThunk = createAsyncThunk<any, any>(
    'usersReducerSlice/unfollow', async (uid, { dispatch }) => {

        dispatch(toggleFollowingProgress({ isFetch: true, id: uid }))
        const r = await usersAPI.deleteUserSubscribe(uid)
        if (r.resultCode === 0) {
            dispatch(unfollowUsers(uid))
        }
        dispatch(toggleFollowingProgress({ isFetch: false, id: uid }))
    }
)



let initialState: IinitialStateUsers = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    pageNumber: 1,
    isFetching: false,
    followingInProgress: [],
    filter: {
        term: '',
        friend: null
    }
}

const usersReducerSlice = createSlice({
    name: 'usersReducerSlice',
    initialState,
    reducers: {
        followUsers(state, action: PayloadAction<number>) {
            state.users.map(u => {
                if (u.id === action.payload) {
                    u.followed = true
                } return u
            })
        },
        unfollowUsers(state, action: PayloadAction<number>) {
            state.users.map(u => {
                if (u.id === action.payload) {
                    u.followed = false
                } return u;
            })
        },
        setUsers(state, action: PayloadAction<Iusers[]>) {
            state.users = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.pageNumber = action.payload
        },
        setTotalUsersCount(state, action: PayloadAction<number>) {
            debugger
            state.totalUsersCount = action.payload
        },
        toggleIsFetching(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload
        },
        toggleFollowingProgress(state, action: PayloadAction<{ isFetch: boolean, id: number }>) {

            action.payload.isFetch
                ? state.followingInProgress.push(action.payload.id)
                : state.followingInProgress = state.followingInProgress.filter(id => id !== action.payload.id)

        },
        setFilter(state, action: PayloadAction<IUsersFilter>) {
            state.filter.term = action.payload.term
            state.filter.friend = action.payload.friend
        }
    },

    // extraReducers: builder => {
    //     builder.addCase(fetchUsersById.pending, (state, action) => {
    //         console.log('fetchUsersById.pending')
    //     })
    //     builder.addCase(fetchUsersById.fulfilled, (state, action) => {
    //         console.log('fetchUsersById.fulfilled')
    //     })
    //     builder.addCase(fetchUsersById.rejected, (state, action) => {
    //         console.log('fetchUsersById.rejected')
    //     })

    //     // -------------------------------------------

    //     builder.addCase(fetchUsersPageSize.pending, (state, action) => {
    //         console.log('fetchUsersPageSize.pending')
    //     })
    //     builder.addCase(fetchUsersPageSize.fulfilled, (state, action) => {
    //         console.log('fetchUsersPageSize.fulfilled')
    //     })
    //     builder.addCase(fetchUsersPageSize.rejected, (state, action) => {
    //         console.log('fetchUsersPageSize.rejected')
    //     })

    // }
})






export default usersReducerSlice.reducer
export const { followUsers, unfollowUsers, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, setFilter } = usersReducerSlice.actions
