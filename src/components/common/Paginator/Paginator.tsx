import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../../hook";
import { getUsersPage } from "../../../redux/users-reducer-slice";
import { setCurrentPage } from "../../../redux/users-reducer-slice";
import { ThemeProvider } from '@mui/material/styles';
import theme2 from "../../../theme2";


// creating numeration of pages on Users component
// let Paginator = ({ totalItemsCount, pageSize, currentPage, portionSize = 10 }: any) => {
function Paginator({ totalItemsCount, pageSize, currentPage, portionSize = 10, filter }: any) {

    let dispatch = useAppDispatch()

    // the result of dividing all users by the number on one page
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let usersFilter = filter

    let onPageChanged = (e: React.ChangeEvent<unknown>, pageNumber: number) => {
        // dispatch(setCurrentPage(pageNumber))
        debugger
        dispatch(getUsersPage([pageNumber, pageSize, usersFilter]))
    }


    // number of pages that are visible
    let portionCount = Math.ceil(pagesCount / portionSize)


    return (<ThemeProvider theme={theme2}>
        <Pagination count={portionCount} page={currentPage} onChange={onPageChanged} shape="rounded" color="primary" siblingCount={10} />
    </ThemeProvider>
    )

}

export default Paginator