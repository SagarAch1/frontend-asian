import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Newsandarticles = () => {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([
    {
      title: "Pursuing a degree in computing and IT abroad: what you must know",
      date: "2024-06-24",
      readTime: "5 min read",
      imageUrl: `${process.env.PUBLIC_URL}/assets/images/a1.webp`,
      category: "IT",
    },
    {
      title:
        "Pursuing a degree in biological and life sciences abroad: what you must know",
      date: "2024-06-30",
      readTime: "5 min read",
      imageUrl: `${process.env.PUBLIC_URL}/assets/images/a2.webp`,
      category: "Life Sciences",
    },
    {
      title: "Does It Matter Where I Take IELTS - IDP Or British Council?",
      date: "2024-06-27",
      readTime: "5 min read",
      imageUrl: `${process.env.PUBLIC_URL}/assets/images/a3.webp`,
      category: "IELTS",
    },
    {
      title: "IELTS or OET for Nurses - Which Should You Take?",
      date: "2024-06-27",
      readTime: "5 min read",
      imageUrl: `${process.env.PUBLIC_URL}/assets/images/a4.webp`,
      category: "IELTS",
    },
    {
      title:
        "Gaining Your IELTS Confidence Back, After Several Tries And Failures",
      date: "2024-06-27",
      readTime: "5 min read",
      imageUrl: `${process.env.PUBLIC_URL}/assets/images/a5.webp`,
      category: "IELTS",
    },
    {
      title: "Don’t Overdo It: How To Ace For Your IELTS Speaking Test",
      date: "2024-06-27",
      readTime: "5 min read",
      imageUrl: `${process.env.PUBLIC_URL}/assets/images/a6.webp`,
      category: "IELTS",
    },
  ]);

  const [filteredArticles, setFilteredArticles] = useState(articles);

  // Function to sort articles by latest date
  const sortArticlesByDate = () => {
    const sortedArticles = [...filteredArticles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setFilteredArticles(sortedArticles);
  };

  // Function to filter articles by category
  const filterArticles = (category) => {
    if (category === "All") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(
        (article) => article.category === category
      );
      setFilteredArticles(filtered);
    }
  };

  // Styles remain the same, adding for simplicity
  const styles = {
    page: { fontFamily: "Arial, sans-serif", paddingTop: "83px" },
    navbar: {
      backgroundColor: "#0056b3",
      padding: "10px 20px",
      color: "white",
      display: "flex",
      justifyContent: "space-around",
      fontSize: "16px",
      fontWeight: "bold",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    header: { textAlign: "center", padding: "20px 0", marginTop: "20px" },
    title: { fontSize: "36px", fontWeight: "bold" },
    filterSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px 0",
    },
    filterButton: {
      backgroundColor: "blue",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      margin: "0 10px",
    },
    filterDropdown: {
      padding: "10px",
      color: "white",
      backgroundColor: "blue",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "16px",
    },
    articlesList: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "20px",
      gap: "20px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    articleCard: {
      backgroundColor: "white",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      width: "30%",
      textAlign: "left",
      cursor: "pointer",
    },
    articleImage: { width: "100%", height: "180px", objectFit: "cover" },
    articleInfo: { padding: "15px" },
    articleTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    articleDate: { fontSize: "14px", color: "#666" },
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <span onClick={() => navigate("/whystudyabroad")}>
          Why study abroad?
        </span>
        <span onClick={() => navigate("/whereandwhattostudy")}>
          Where and what to study?
        </span>
        <span onClick={() => navigate("/how-do-i-apply")}>How do I apply?</span>
        <span onClick={() => navigate("/after-receiving-offer")}>
          After receiving an offer
        </span>
        <span onClick={() => navigate("/prepare-to-depart")}>
          Prepare to depart
        </span>
        <span onClick={() => navigate("/arrive-and-thrive")}>
          Arrive and thrive
        </span>
      </nav>

      {/* Page header */}
      <header style={styles.header}>
        <h1 style={styles.title}>
          {filteredArticles.length} news and articles
        </h1>
      </header>

      {/* Filter and Sort Section */}
      <div style={styles.filterSection}>
        <select
          style={styles.filterDropdown}
          onChange={(e) => filterArticles(e.target.value)}
        >
          <option value="All">Filter</option>
          <option value="IT">IT</option>
          <option value="Life Sciences">Life Sciences</option>
          <option value="IELTS">IELTS</option>
        </select>
        <button style={styles.filterButton} onClick={sortArticlesByDate}>
          Sort by: Publish date (new to old)
        </button>
      </div>

      {/* Articles List */}
      <div style={styles.articlesList}>
        {filteredArticles.map((article, index) => (
          <div
            key={index}
            style={styles.articleCard}
            onClick={() => navigate(`/articles/${index}`)}
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              style={styles.articleImage}
            />
            <div style={styles.articleInfo}>
              <h3 style={styles.articleTitle}>{article.title}</h3>
              <p style={styles.articleDate}>
                {new Date(article.date).toLocaleDateString()} •{" "}
                {article.readTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsandarticles;
