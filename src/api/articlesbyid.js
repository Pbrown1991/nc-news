const BASE_URL = 'https://pb-news-server.onrender.com/api'

export function fetchArticleById(article_id) {
    return fetch(`${BASE_URL}/articles/${article_id}`)
        .then((response) => {
            if (!response.ok) {
            throw new Error('Fetching article by ID failed')
            }
            return response.json();
        })
        .then((data) => {
        return data
        })
        .catch((err) => {
            console.error('Error fetching article by ID:', err)
            throw err
    })
}