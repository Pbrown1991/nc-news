const BASE_URL = 'https://pb-news-server.onrender.com/api'

export function fetchCommentsByArticleId(article_id) {
    return fetch(`${BASE_URL}/articles/${article_id}/comments`)
        .then((response) => {
            if (!response.ok) {
            throw new Error('Fetching comments failed')
            }
            return response.json();
        })
        .then((data) => {
        return data
        })
        .catch((err) => {
            console.error("Error fetching comments", err)
            throw err
    })
}