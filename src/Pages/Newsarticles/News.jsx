import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome
import React, { useEffect, useState } from "react";
import { getNewsApi } from "../../apis/Api";
import "./news.css"; // Importing the component-specific CSS file

const UpcomingNews = () => {
  const [news, setNews] = useState([]);
  const url = process.env.API_URL || "https://api.asian.edu.np";

  useEffect(() => {
    getNewsApi()
      .then((res) => {
        setNews(res.data.news || []);
      })
      .catch((error) => {
        console.error("Failed to fetch news:", error);
      });
  }, []);

  return (
    <div className="upcoming-news-container mt-5 pt-5 p-3 bg-light text-center">
      <h2>News</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {news.length > 0 ? (
          news.map((newsItem) => (
            <div className="col" key={newsItem._id}>
              <div className="upcoming-news-card">
                <div className="upcoming-news-card-header">
                  <img
                    src={`${url}/news/${newsItem.newsImage}`}
                    className="upcoming-news-image"
                    alt="News"
                  />
                </div>
                <div className="upcoming-news-card-body">
                  <h5 className="upcoming-news-title">{newsItem.newsName}</h5>

                  {/* Time with Clock Icon */}
                  <p className="upcoming-news-date">
                    <FontAwesomeIcon icon={faClock} className="icon-clock" />{" "}
                    {new Date(newsItem.newsDate).toDateString()} -{" "}
                    {new Date(newsItem.newsDate).toLocaleTimeString()}
                  </p>

                  {/* News Link */}
                  <p>
                    <a
                      href={newsItem.newsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="news-link"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No news available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingNews;
