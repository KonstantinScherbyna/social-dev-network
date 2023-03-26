import { Article } from "../../types/types"
import styles from './news.module.css'


const News = ({ source, author, title, description, url, urlToImage, publishedAt }: Article) => {

    const year = publishedAt.substring(0, 4)
    const month = publishedAt.substring(5, 7)
    const day = publishedAt.substring(8, 10)

    const date = `${year}${'.'}${month}${'.'}${day}`

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