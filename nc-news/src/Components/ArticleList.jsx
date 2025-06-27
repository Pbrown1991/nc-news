import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";
import ArticleCard from "./ArticleCard";

function ArticleList() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setError(null);
        fetchArticles()
            .then((data) => {
                setArticles(data.articles);
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching articles:", error)
                setError(error);
                setLoading(false)
        })
    }, [])
    if (loading) return <p className="load-text">Loading articles</p>

    return (
        <div>
            {articles.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
            ))}
    </div>
)

}

export default ArticleList;