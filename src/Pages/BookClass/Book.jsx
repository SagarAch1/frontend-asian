import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getBookApi } from "../../apis/Api";

const Book = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = () => {
    getBookApi()
      .then((response) => {
        console.log("response", response.data);
        if (response.status === 200) {
          console.log("response", response);
          setBook(response.data.data); 
        } else {
          toast.error("Failed to fetch book");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while fetching book");
      });
  };

  const styles = {
    container: {
      padding: "50px",
      backgroundColor: "#f7f8fc",
    },
    header: {
      textAlign: "center",
      marginBottom: "30px",
    },
    title: {
      color: "#5c20d0",
      fontSize: "32px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      padding: "12px",
      backgroundColor: "#5c20d0",
      color: "#000", // Changed to black
    },
    td: {
      padding: "12px",
      border: "1px solid #ccc",
      color: "#000", // Changed to black
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>List Of Bookings</h2>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Language Class</th>
            <th style={styles.th}>Payment</th>
            <th style={styles.th}>Time</th>
            <th style={styles.th}>Message</th>
          </tr>
        </thead>
        <tbody>
          {book.map((book) => (
            <tr key={book._id}>
              <td style={styles.td}>{book.name}</td>
              <td style={styles.td}>{book.email}</td>
              <td style={styles.td}>{book.phone}</td>
              <td style={styles.td}>{book.languageclass}</td>
              <td style={styles.td}>{book.payment}</td>
              <td style={styles.td}>{book.time}</td>
              <td style={styles.td}>{book.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Book;
