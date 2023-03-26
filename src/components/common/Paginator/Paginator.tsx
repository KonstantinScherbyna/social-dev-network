import Pagination from "@mui/material/Pagination";
import React from "react";
import { useAppDispatch } from "../../../hook";
import { getUsersPage } from "../../../redux/users-reducer-slice";
import { ThemeProvider } from '@mui/material/styles';
import theme2 from "../../../theme2";


function Paginator({ totalItemsCount, pageSize, currentPage, portionSize = 10, filter }: any) {

    let dispatch = useAppDispatch()

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let usersFilter = filter

    let onPageChanged = (e: React.ChangeEvent<unknown>, pageNumber: number) => {
        dispatch(getUsersPage([pageNumber, pageSize, usersFilter]))
    }

    let portionCount = Math.ceil(pagesCount / portionSize)

    return (<ThemeProvider theme={theme2}>
        <Pagination count={portionCount} page={currentPage} onChange={onPageChanged} shape="rounded" color="primary" siblingCount={10} />
    </ThemeProvider>
    )
}

export default Paginator