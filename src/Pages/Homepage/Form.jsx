import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getFormApi } from "../../apis/Api";

const Form = () => {
  const [form, setForm] = useState([]);

  useEffect(() => {
    fetchForm();
  }, []);

  const fetchForm = () => {
    getFormApi()
      .then((response) => {
        console.log("response", response.data);
        if (response.status === 200) {
          console.log("response", response);
          setForm(response.data.data); 
        } else {
          toast.error("Failed to fetch form");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while fetching form");
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
        <h2 style={styles.title}>form Messages</h2>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>First Name</th>
            <th style={styles.th}>Last Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Destination</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Office</th>
            <th style={styles.th}>Counselling</th>
            <th style={styles.th}>Funding Source</th>
            <th style={styles.th}>Study Level</th>
          </tr>
        </thead>
        <tbody>
          {form.map((form) => (
            <tr key={form._id}>
              <td style={styles.td}>{form.firstName}</td>
              <td style={styles.td}>{form.lastName}</td>
              <td style={styles.td}>{form.email}</td>
              <td style={styles.td}>{form.mobileNumber}</td>
              <td style={styles.td}>{form.preferredDestination}</td>
              <td style={styles.td}>{form.studyDate}</td>
              <td style={styles.td}>{form.office}</td>
              <td style={styles.td}>{form.counsellingMode}</td>
              <td style={styles.td}>{form.fundingSource}</td>
              <td style={styles.td}>{form.studyLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
