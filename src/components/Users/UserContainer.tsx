import { useAppDispatch } from '../../hook'
import { followThunk, unfollowThunk, } from '../../redux/users-reducer-slice'
import { Iusers } from '../../types/types'
import User from './User'


let UserContainer = ({ user, followingInProgress }: { user: Iusers, followingInProgress: number[] }) => {

    let dispatch = useAppDispatch()

    let unfollow: (uid: number) => void = (uid) => {
        dispatch(unfollowThunk(uid))
    }

    let follow: (uid: number) => void = (uid) => {
        dispatch(followThunk(uid))
    }

    return (
        < User follow={follow} unfollow={unfollow} user={user} followingInProgress={followingInProgress} />
    )

}

export default UserContainer