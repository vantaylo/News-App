import React, {useState, useEffect} from "react";
import axios from 'axios';
import './dashboard.css';

const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`;

const Dashboard = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchNYT = async () => {
      const res = await axios.get(url)

      // console.log("NYT response: ", res);
      setArticles(res.data.results)
      console.log("Array of articles from NYT", res.data.results);

    }

    fetchNYT();
  }, [])

  return (
    <div className="dashboard-container">
      <div className="publication">New York Times</div>

      <div className="articles">
        {articles.map((article) => {
          const {abstract, byline, title, url, multimedia} = article
          
          let photoDisplay;

          for (let photo of multimedia) {
            if (photo.format === "mediumThreeByTwo210") {
              photoDisplay = photo.url;
            }
          }


          return (
            <div className="article" key={url}>
              <img src={photoDisplay} alt={title} />
              <div>{}</div>
              <div className="article-title">{title}</div>
              <div className="article-abstract">{abstract}</div>
              <div className="article-byline">{byline}</div>
            </div>
          )
        })}      
      </div>
    </div>
  );
}

export default Dashboard;