import { useEffect } from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { useAppDispatch, useAppSelector } from '../../hook';
import { getUsersPage } from '../../redux/users-reducer-slice';
import Users from './Users';



type QueryParamsType = { term?: string; page?: string; friend?: string }

const UsersContainer = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    let location = useLocation()

    const totalItemsCount = useAppSelector(store => store.usersPage.totalUsersCount)
    const pageSize = useAppSelector(store => store.usersPage.pageSize)
    const pageNumber = useAppSelector(store => store.usersPage.pageNumber)
    const isFetching = useAppSelector(store => store.usersPage.isFetching)
    const users = useAppSelector(store => store.usersPage.users)
    const followingInProgress = useAppSelector(store => store.usersPage.followingInProgress)
    const filter = useAppSelector(store => store.usersPage.filter)
    const portionSize = 10


    debugger

    useEffect(() => {

        const urlLocation = new URLSearchParams(location.search)

        debugger



        let usersFilter = filter
        let actualPage = pageNumber

        const term = urlLocation.get('term')
        const friend = urlLocation.get('friend')
        const page = urlLocation.get('page')


        if (!!page) actualPage = Number(page)
        if (!!term) usersFilter = { ...usersFilter, term: term }
        debugger
        switch (friend) {
            case "null":
                usersFilter = { ...usersFilter, friend: null }
                break
            case 'true':
                usersFilter = { ...usersFilter, friend: true }
                break
            case 'false':
                usersFilter = { ...usersFilter, friend: false }
                break
        }
        debugger
        dispatch(getUsersPage([actualPage, pageSize, usersFilter]))


    }, [])

    useEffect(() => {



        const query: QueryParamsType = {}


        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (pageNumber !== 1) query.page = String(pageNumber)

        debugger
        //     navigate(`/users?term=${filter.term}&friend=${filter.friend}&page=${pageNumber}`)
        // }, [filter, pageNumber])

        const params = new URLSearchParams(query)
        debugger

        navigate({
            pathname: '/users',
            search: `${params}`,
        })
        // navigate({
        //     pathname: '/users',
        //     search: `?term=${filter.term}&friend=${filter.friend}&page=${pageNumber}`,
        // })

    }, [filter, pageNumber])

 

    // if (isFetching) {
    //     return <Preloader />
    // } 
    return <Users
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        pageNumber={pageNumber}
        isFetching={isFetching}
        users={users}
        followingInProgress={followingInProgress}
        // pagesCount={pagesCount}
        portionSize={portionSize}
        // onPageChanged={onPageChanged}
        filter={filter}
    />
}


export default withAuthRedirect(UsersContainer)
