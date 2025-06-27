import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticleById } from "../api/articlesbyid";
import { fetchCommentsByArticleId } from "../api/commentsbyarticleid";
import Comments from "./Comments";
import { patchArticleVotes } from "../api/patchArticleVote";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [showComments, setShowComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    fetchArticleById(article_id)
      .then((data) => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Article not found");
        setLoading(false);
      });
  }, [article_id]);

  function toggleCommments() {
    setShowComments((prev) => !prev);
}
    
    function handleVotingClick(diff) {
        setArticle((currArticle) => ({
            ...currArticle,
            votes:currArticle.votes+diff
        }))
        patchArticleVotes(article.article_id, diff)
            .then((newArticle) => {
            setArticle(newArticle.article)
            })
            .catch((err) => {
                console.error('Vote change failed', err);
                setArticle((currArticle)=>({
                    ...currArticle, votes: currArticle.votes-diff
                }))
        })
    }

  if (loading) return <p className="load-text">Loading article</p>;

  const { title, topic, body, author, votes, article_img_url, comment_count } =
    article;
 
  

  return (
    <main className="article-page">
      <h1 className="article-title">{title}</h1>
      <p className="article-info">
        Author: {author} || Topic: {topic} || Created At:{" "}
        {new Date(article.created_at).toLocaleDateString()}{" "}
      </p>
      <img src={article_img_url} alt="No image found" className="article-img" />
      <section className="article-body">{body}</section>
      <div className="article-votes">
              <button onClick={() =>handleVotingClick(1)}><ThumbUpIcon/></button>
              <button onClick={() => handleVotingClick(-1)}><ThumbDownIcon/></button>
              <p className="vote-number">{votes}</p>
          </div>
      <div className="article-comment-count">Comments: {comment_count}</div>
      
      <button className="comment-toggle" onClick={toggleCommments}>
        {showComments ? "Hide Comments" : "View Comments"}
      </button>
      {showComments && <Comments article_id={article_id} currentUser={"guest"} />}
    </main>
  );
}

export default ArticlePage;
