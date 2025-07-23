const BASE_URL = 'https://pb-news-server.onrender.com/api'

export function deleteComment(comment_id) {
    return fetch(`${BASE_URL}/comments/${comment_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if (!response.ok) {
            throw new Error ('Deleting comment failed')
            }
            return true;
    })
    
}