import { Article } from "../../types/types"
import styles from './news.module.css'


const News = ({ source, author, title, description, url, urlToImage, publishedAt }: Article) => {

    const year = publishedAt.substring(0, 4)
    const month = publishedAt.substring(5, 7)
    const day = publishedAt.substring(8, 10)

    const date = `${year}${'.'}${month}${'.'}${day}`

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.title}>
                        <h1>{title}</h1>
                    </div>

                    <div>
                        {urlToImage && <img src={urlToImage} />}
                    </div>

                    <div className={styles.description}>
                        <h3>{description}</h3>
                    </div>

                    <div className={styles.resourceRef}>
                        <a href={url} title={`Go to ${source.name}`}>Show more</a>
                    </div>

                    <div className={styles.resource}>

                        {date} Resource: {source.name}

                        <div className={styles.author}>
                            <b> Author</b>: {author}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News