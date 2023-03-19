import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hook"
import { updateStatus } from "../../../redux/profile-reducer-slice"
import ProfileStatus from "./ProfileStatus"


// status of user on a page
const ProfileStatusContainer = (props: any) => {

    const dispatch = useAppDispatch()

    const userStatus = useAppSelector((state) => state.profilePage.status)

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(userStatus)

    debugger
    useEffect(() => {
        setStatus(status)
    }, [status])

    // activate mod for editing status
    const activateEditMode = () => {
        debugger
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        dispatch(updateStatus(status))
    }

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return <ProfileStatus editMode={editMode}
        activateEditMode={activateEditMode}
        deactivateEditMode={deactivateEditMode}
        onStatusChange={onStatusChange} />
}

export default ProfileStatusContainer