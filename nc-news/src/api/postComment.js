const BASE_URL = 'https://pb-news-server.onrender.com/api'

export function postComment(article_id, username, body) {
    return fetch(`${BASE_URL}/articles/${article_id}/comments`, {
        method: 'POST', 
        headers: {
        'Content-Type':'application/json'
        },
        body: JSON.stringify({username, body}),
    })
        .then((response) => {
            if (!response.ok) {
            throw new Error('Posting comment failed')
            }
            return response.json()
        })
        .then((data) => {
        return data
        })
        .catch((err) => {
        console.error('Error posting comment', err)
    })
        
    
}