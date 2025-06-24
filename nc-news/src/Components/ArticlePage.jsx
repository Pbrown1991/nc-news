import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticleById } from "../api/articlesbyid";

function ArticlePage() {
    const { article_id } = useParams()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        setError(null)
        fetchArticleById(article_id)
            .then((data) => {
                setArticle(data.article);
                setLoading(false)
            })
            .catch((err) => {
                console.error(err);
                setError('Article not found');
                setLoading(false);
        })
    }, [article_id])
    
    if (loading) return <p>Loading article</p>
    if (!article) return null
    
const { title, topic, body, author, votes, article_img_url, comment_count} = article

    return (
        <main className="article-page">
            <h1 className="article-title">{title}</h1>
            <p className="article-info">Author:{author} || Topic:{topic} || Created At: {new Date(article.created_at).toLocaleDateString()} </p>
            <img src={article_img_url} alt="No image found" className="article-img" />
            <section className="article-body">{body}</section>
            <div className="article-votes">Votes: {votes} || Comments: {comment_count}</div>
        </main>
    )

}

export default ArticlePage