import ArticleList from "../Components/ArticleList";
import { Link } from "react-router-dom";

function HomePage() {
    return (<main className="homepage-main">
        <div className="topics-nav">
            <h2>Explore Topics</h2>
            <nav>
      <ul className="topics-list">
        <li><Link to="/topics/coding">Coding</Link></li>
        <li><Link to="/topics/football">Football</Link></li>
        <li><Link to="/topics/cooking">Cooking</Link></li>
                </ul>
                </nav>
    </div>
        <h1>All Articles</h1>
        <ArticleList />

    </main>)
}

export default HomePage