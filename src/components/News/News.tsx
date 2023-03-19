
import { textAlign } from "@mui/system"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hook"
import store from "../../redux/redux-store-toolkit"
import { Article } from "../../types/types"
import styles from './news.module.css'

// interface INews {
//     (news: Article): JSX.Element
// }




const News = ({ source, author, title, description, url, urlToImage, publishedAt, content, id, }: Article) => {


    // let publishedAt = news.publishedAt
    debugger
    const year = publishedAt.substring(0, 4)
    const month = publishedAt.substring(5, 7)
    const day = publishedAt.substring(8, 10)

    const date = `${year}${'.'}${month}${'.'}${day}`
    // const year = publishedAt.getFullYear();
    debugger
    // const month = String(publishedAt.getMonth() + 1).padStart(2, '0');
    // const day = String(publishedAt.getDate() - 1).padStart(2, '0');
    // const date = `${year}-${month}-${day}`;

    debugger
    return <section className={styles._page}>
        <div className={styles._page_container}>
            <div className={styles._body}>
                <div className={styles._title}>
                    <h1>{title}</h1>
                </div>

                <div>
                    {urlToImage && <img src={urlToImage} />}
                </div>

                <div className={styles._description}>
                    <h3>{description}</h3>
                </div>

                <div className={styles._resourceRef}>
                    <a href={url} title={`Go to ${source.name}`}>Show more</a>
                </div>

                <div className={styles._resource}>

                    {date} Resource: {source.name}

                    <div className={styles._author}>
                        <b> Author</b>: {author}
                    </div>
                </div>
            </div>
        </div>
    </section>

}

export default News