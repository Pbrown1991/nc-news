import { useState } from "react";
import { postComment } from "../api/postComment";

function CommentForm({ article_id, onCommentAdded }) {
    const [commentText, setCommentText] = useState('')
    const [posting, setPosting] = useState(false)
    const [error, setError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();
        setPosting(true)
        setError(null)
        postComment(article_id, 'guest', commentText)
            .then((newCommentWrapped) => {
                const newComment = newCommentWrapped.comment
                onCommentAdded(newComment);
                setCommentText('');
                setPosting(false)
            })
            .catch((err) => {
                setError('Posting comment failed');
                setPosting(false)
        })
    }
    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
                placeholder="Comment here"
                rows={4}
                className="comment-area"
            />
            <button type="submit" disabled={posting} className="post-button">{posting ? "Posting..." : "Post"}</button>
            {error && <p className="error-message">{error}</p>}
        </form>
    )
}

export default CommentForm