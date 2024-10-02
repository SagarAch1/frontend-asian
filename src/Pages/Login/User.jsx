import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUserApi } from "../../apis/Api";

const User = () => {
  const [users, setUsers] = useState([]);  // Initialize with an empty array
  const [loading, setLoading] = useState(true);  // Add a loading state

  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch users using the API
  const fetchUsers = () => {
    getUserApi()
      .then((response) => {
        console.log("Response:", response); // Debug: log the response
        if (response.status === 200 && response.data) {
          setUsers(response.data.users);  // Ensure you're accessing the correct structure
          toast.success("Users fetched successfully!");
        } else {
          toast.error("Failed to fetch users");
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);  // Debug: log the error
        toast.error("An error occurred while fetching users");
      })
      .finally(() => {
        setLoading(false);  // Set loading to false once data is fetched
      });
  };

  // Styles for the component
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
      color: "#fff",
    },
    td: {
      padding: "12px",
      border: "1px solid #ccc",
      color: "#000",
    },
  };

  // Handle the case when loading or no users
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!users || users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Registered Users</h2>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>S.No</th> {/* Add S.No column */}
            <th style={styles.th}>User ID</th>
            <th style={styles.th}>Full Name</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td style={styles.td}>{index + 1}</td> {/* Display the index + 1 as S.No */}
              <td style={styles.td}>{user.userId}</td>
              <td style={styles.td}>{user.fullName}</td>
              <td style={styles.td}>{user.phone}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>{user.isAdmin ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
