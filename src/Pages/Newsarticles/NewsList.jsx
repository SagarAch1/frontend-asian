import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getNewsApi } from "../../apis/Api";

const Newslist = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news"); 
  };

  // State for storing fetched news
  const [news, setNews] = useState([]);
  const url=process.env.API_URL || "http://localhost:5000";

  // Call the API to fetch all news initially (Page Load)
  useEffect(() => {
    getNewsApi()
      .then((res) => {

        setNews(res.data.news);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ textAlign: "right" }}>
        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginTop: "40px",
            marginLeft: "20px",
            borderRadius: "8px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          New News
        </button>
      </div>

      <table
        className="table mt-2"
        style={{
          marginTop: "20px",
          width: "100%",
          borderCollapse: "collapse",
          borderSpacing: "0",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid black", // Set border color of the table
        }}
      >
        <thead
          className="table-primary"
          style={{ backgroundColor: "#343a40", color: "black" }}
        >
          <tr>
            <th style={tableHeaderStyle}>News Name</th>
            <th style={tableHeaderStyle}>News Link</th>
            <th style={tableHeaderStyle}>News Date</th> 
            <th style={tableHeaderStyle}>News Image</th>
            <th style={tableHeaderStyle}>News Actions</th>
          </tr>
        </thead>
        <tbody>
          {news.map((news) => (
            <tr key={news._id}>
              <td>{news.newsName}</td>
              <td>{news.newsType}</td>
              <td>{news.newsDate}</td> 

              <td>
                <img
                  src={`${url}/news/${news.newsImage}`}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </td>
              <td>
                <Link
                  to={`/admin/update-news/${news._id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
                <button className="btn btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Style object for table headers and cells
const tableHeaderStyle = {
  padding: "12px",
  border: "1px solid black", // Set border color of table headers
  textAlign: "left",
};

export default Newslist;
