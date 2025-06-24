export function fetchArticles() {
    return fetch('https://pb-news-server.onrender.com/api/articles')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Fetching articles failed')
            }
            return response.json();
        })
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.error("Error fetching articles:", err)
            throw err
    })
    
}