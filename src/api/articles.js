export function fetchArticles(sortBy = "created_at", order = "DESC") {
  const baseUrl = "https://pb-news-server.onrender.com/api/articles";
  const url = new URL(baseUrl);

  url.searchParams.append("sort_by", sortBy);
  url.searchParams.append("order", order);

  return fetch(url.toString())
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetching articles failed");
      }
      return response.json();
    })
    .catch((err) => {
      console.error("Error fetching articles:", err);
      throw err;
    });
}