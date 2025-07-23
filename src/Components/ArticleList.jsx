import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";
import ArticleCard from "./ArticleCard";
import SortControls from "./SortControls";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  useEffect(() => {
    setError(null);
    fetchArticles(sortBy, order)
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setError(error);
        setLoading(false);
      });
  }, [sortBy, order]);
  if (loading) return <p className="load-text">Loading articles</p>;

  return (
    <div>
      <SortControls
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      />
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
