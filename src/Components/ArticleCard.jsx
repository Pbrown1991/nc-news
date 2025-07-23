import { Link } from "react-router-dom"

function ArticleCard({ article }) {
    const {article_id, title, topic, author, votes, article_img_url, comment_count} = article
    
    return (
        <div className="article-card">
            <Link to={`/articles/${article_id}`}>
            <h2 className="article-title">{title}</h2>
            <p className="article-author-topic">{author} - {topic}</p>
            <img src={article_img_url} alt="No image found" className="article-img" />
            <p className="under-card-info">Comments: {comment_count} || Votes: {votes} || Created At: {new Date(article.created_at).toLocaleDateString()} </p>
       </Link>
        </div>
    )

}

export default ArticleCard