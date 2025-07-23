const BASE_URL = 'https://pb-news-server.onrender.com/api'

export function patchArticleVotes(article_id, voteChange) {
    return fetch(`${BASE_URL}/articles/${article_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({inc_votes:voteChange})
    })
        .then((response) => {
            if (!response.ok) {
            throw new Error('Update article failed')
            } 
            return response.json()
        })
        .then((data) => {
        return data
        })
        .catch((err) => {
            console.error('Error patching article', err)
            throw err
    })
}