function Comments({comments}) {
    return (
        <section className="comments-section">
                    {comments.map((comment) => (
                        <div key={comment.comment_id} className="comment-card">
                            <p className="comment-author">{comment.author}</p>
                            <p className="comment-body"> {comment.body}</p>
                            <p className="comment-votes">Votes:  {comment.votes}</p>
                            <p className="comment-created-at"> Created At: {new Date(comment.created_at).toLocaleDateString()} </p>
                        </div>
                    ))}
                </section>)}
    


export default Comments