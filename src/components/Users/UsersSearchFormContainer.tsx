import debounce from 'lodash.debounce';
import { useAppDispatch, useAppSelector } from '../../hook';
import { getUsersPage, } from '../../redux/users-reducer-slice';
import { IUsersFilter } from '../../types/types';
import UsersSearchForm from './UsersSearchForm';


const UsersSearchFormContainer = () => {

    let dispatch = useAppDispatch()

    const pageSize = useAppSelector(store => store.usersPage.pageSize)
    const pageNumber = useAppSelector(store => store.usersPage.pageNumber)
    const filter = useAppSelector(store => store.usersPage.filter)

    const onFilterChanged = (usersFilter: IUsersFilter) => {
        dispatch(getUsersPage([pageNumber, pageSize, usersFilter]))
    }

    const f1 = (e: any) => {
        let e2 = e?.target?.value
        const usersFilter = {
            term: e2 === "null" ? filter.term : e2 === "true" ? filter.term : e2 === "false" ? filter.term : e2,
            friend: e2 === "null" ? null : e2 === "true" ? true : e2 === "false" ? false : filter.friend
        }
        onFilterChanged(usersFilter)
    }

    const debounced = debounce(f1, 200)

    return <UsersSearchForm
        onFilterChanged={onFilterChanged}
        filter={filter}
        f1={f1}
        debounced={debounced}
    />
}


export default UsersSearchFormContainer
