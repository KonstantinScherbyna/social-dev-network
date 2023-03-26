import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { myProfileInfoThunk } from '../../../redux/profile-reducer-slice';
import styles from './profileDataForm.module.css'

const ProfileDataForm = (props: any) => {

    const dispatch = useAppDispatch()

    const profile = useAppSelector((store) => store.profilePage.myProfile)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
    });

    const myid = useAppSelector(store => store.profilePage.myProfile.userId)

    const onSubmit = (data: any) => {

        dispatch(myProfileInfoThunk({ data, myid }))

    }

    return <div className={styles.__container}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="submit" />
            </div>
            <div>
                Full Name:
                <input type={"text"} defaultValue={profile.fullName} {...register("fullName")} />

            </div>
            <div>
                Looking for a Job:
                <input type={"text"} defaultValue={profile.lookingForAJob.toString()} {...register("lookingForAjob")} />

            </div>
            <div>
                Looking for a Job Description:
                <input type={"text"} defaultValue={profile.lookingForAJobDescription} {...register("lookingForAJobDescription")} />

            </div>
            <div>
                About me:
                <input type={"text"} defaultValue={profile.aboutMe} {...register("aboutMe")} />
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key}><b>{key}: <input {...register(`contacts.${key}`)} /></b></div>
                })}
            </div>
        </form>
    </div>
}

export default ProfileDataForm;