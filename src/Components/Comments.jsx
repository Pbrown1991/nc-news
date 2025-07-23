import { useState, useEffect } from "react"
import { fetchCommentsByArticleId } from "../api/commentsbyarticleid"
import CommentForm from "./CommentForm"
import { deleteComment } from "../api/deleteComment"
import DeleteIcon from '@mui/icons-material/Delete';



function Comments({ article_id, currentUser }) {

    const [comments, setComments] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setError(null)
        fetchCommentsByArticleId(article_id)
            .then((data) => {
                setComments(data.comments);
                setLoading(false)
            })
            .catch((err) => {
                setError('Unable to load comments')
                setLoading(false)
            })
    }, [article_id])
    
    function handleNewComment(newComment) {
      setComments((curr) => [newComment, ...curr]);
    }
  
  function handleDelete(comment_id) {
  deleteComment(comment_id)
    .then(() => {
      setComments((curr) =>
       curr.filter((comment) => comment.comment_id !== comment_id)
      );
    })
    .catch(() => {
      alert('Failed to delete comment');
    });
}

    if (loading) return <p>Loading comments</p>
    if (error) return <p>{error}</p>






    return (
  <section className="comments-section">
    <h2>Comments</h2>
    <CommentForm article_id={article_id} onCommentAdded={handleNewComment} />

    {comments === null ? (
      <p>Loading comments...</p>
    ) : comments.length === 0 ? (
      <p>No comments yet</p>
    ) : (
      comments.map((comment, index) => (
        <div key={comment.comment_id ?? index} className="comment-card">
          <p className="comment-author">{comment.author}</p>
          <p className="comment-body">{comment.body}</p>
          <p className="comment-votes">Votes: {comment.votes}</p>
          <p className="comment-created-at">
            Created At: {comment.created_at ? new Date(comment.created_at).toLocaleDateString() : 'Unknown'}
          </p>
          {comment.author === currentUser &&(
          <button className="delete-button" onClick={()=>handleDelete(comment.comment_id)}><DeleteIcon/></button>)}
        </div>
      ))
    )}
  </section>
)
}


export default Comments