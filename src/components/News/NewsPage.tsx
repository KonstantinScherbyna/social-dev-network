import { useEffect, useState } from "react"
import styles from './news.module.css'
import { useGetNewsQuery } from "../../api/news-api"
import { useAppDispatch, useAppSelector } from "../../hook"
import { setNews } from "../../redux/news-reducer-slice"
import store from "../../redux/redux-store-toolkit"
import { v1 } from 'uuid'
import { Article, INewsResult } from "../../types/types"
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"
import { SerializedError } from "@reduxjs/toolkit"
import News from "./News"
import Backdrp from "../common/Preloader/BackDrop"



const NewsPage = () => {

    const dispatch = useAppDispatch()

    const key = '8fb9fedf1b6a45419dc2352210fc03ea'



    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate() - 1).padStart(2, '0');
    const date = `${year}-${month}-${day}`;

    debugger
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setDate(new Date());
    //     }, 1000);

    //     return () => clearInterval(intervalId);
    // }, []);


    let { data, error, isLoading, isFetching } = useGetNewsQuery({ apikey: key, date: String(date) })

    let data2: INewsResult = {
        status: '',
        totalResults: 0,
        articles: []
    }

    debugger

    if (!!data) {
        data2 = { ...data, articles: { ...data.articles, ...data.articles.map((a) => ({ ...a, id: v1() })) } }
    }

    const articles = Object.values(data2.articles)
    const totalResults = data2.totalResults
    const status = data2.status
    // let a = ar2.map(a => ({ ...a, id: v1() }))
    debugger


    useEffect(() => {
        debugger
        dispatch(setNews({ articles, totalResults, status }))
    }, [data])


    let news = useAppSelector(store => store.news.articles)




    if (!!isFetching || isLoading) {
        return <Backdrp />
    } return (<div>
        {news.map(n => <News key={n.id}
            source={n.source}
            author={n.author}
            title={n.title}
            description={n.description}
            url={n.url}
            urlToImage={n.urlToImage}
            publishedAt={n.publishedAt}
            content={n.content}
            id={n.id} />)}


    </div >)

}

export default NewsPage