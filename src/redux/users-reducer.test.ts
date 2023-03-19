import { IinitialStateUsers } from "../types/types"
import usersReducerSlice, { followUsers, unfollowUsers } from "./users-reducer-slice"

let state: IinitialStateUsers
//@ts-ignore
beforeEach(() => {
    //@ts-ignore
    state = {
        users: [
            {
                id: 0,
                name: 'Kostya 0',
                followed: false,
                uniqueUrlName: 'kos0',
                photos: { small: null, large: null },
                status: 'status 0'
            },
            {
                id: 1,
                name: 'Kostya 1',
                followed: false,
                uniqueUrlName: 'kos1',
                photos: { small: null, large: null },
                status: 'status 1'
            },
            {
                id: 2,
                name: 'Kostya 2',
                followed: true,
                uniqueUrlName: 'kos2',
                photos: { small: null, large: null },
                status: 'status 2'
            },
            {
                id: 3,
                name: 'Kostya 3',
                followed: true,
                uniqueUrlName: 'kos3',
                photos: { small: null, large: null },
                status: 'status 3'
            }
        ],
        pageSize: 10,
        totalUsersCount: 0,
        pageNumber: 1,
        isFetching: false,
        followingInProgress: [],
    }
})

test("follow success", () => {

    // const result = usersReducerSlice.reducer(state, usersReducerSlice.actions.followUsers({ true}))
    const newState = usersReducerSlice(state, followUsers(1))

    // expect(newState.users[0].followed).toBeFalsy()
    // expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()

})

test("unfollow success", () => {

    // const result = usersReducerSlice.reducer(state, usersReducerSlice.actions.followUsers({ true}))
    const newState = usersReducerSlice(state, unfollowUsers(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()

})