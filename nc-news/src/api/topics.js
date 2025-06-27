const BASE_URL = 'https://pb-news-server.onrender.com/api'

export function fetchArticlesByTopic(topic) {
    return fetch(`${BASE_URL}/articles?topic=${topic}`)
        .then((response) => {
            if (!response.ok) {
            throw new Error('Fetching articles by topic failed')
            }
            return response.json()
        })
        .then((data) => {
        return data
        })
        .catch((err) => {
            console.error("Error fetching articles by topic", err)
            throw err
    })
}