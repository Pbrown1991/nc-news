import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../api/topics";
import { Link } from "react-router-dom";

function TopicPage() {
    const { topic_slug } = useParams()
    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        fetchArticlesByTopic(topic_slug)
            .then((data) => {
                setError(null)
                
                setArticles(data.articles)
                setLoading(false)
                
            })
            .catch((err) => {
                console.error('Failed to fetch articles', err)
                setError(err)
                setLoading(false)
        })
    }, [topic_slug])
    
    if (isLoading) return <p className="load-text">Loading</p>

    if (error) return <p className="error-text">Error: {error.message}</p>
    
    return (
    <div className="topic-page">
      <h2>Articles on {topic_slug}</h2>
      {articles.map((article) => (
          <div key={article.article_id} className="article-card">
               <Link to={`/articles/${article.article_id}`}>
                  <h3 className="article-title">{article.title}</h3>
                  </Link>
          <p className="article-author-topic">By {article.author}</p>
        </div>
      ))}
    </div>
  );
}

export default TopicPage;