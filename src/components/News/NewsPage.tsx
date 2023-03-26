import { useEffect } from "react"
import { useGetNewsQuery } from "../../api/news-api"
import { useAppDispatch, useAppSelector } from "../../hook"
import { setNews } from "../../redux/news-reducer-slice"
import { v1 } from 'uuid'
import { INewsResult } from "../../types/types"
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


    let { data, isLoading, isFetching } = useGetNewsQuery({ apikey: key, date: String(date) })

    let data2: INewsResult = {
        status: '',
        totalResults: 0,
        articles: []
    }

    if (!!data) {
        data2 = { ...data, articles: { ...data.articles, ...data.articles.map((a) => ({ ...a, id: v1() })) } }
    }

    const articles = Object.values(data2.articles)
    const totalResults = data2.totalResults
    const status = data2.status

    useEffect(() => {
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