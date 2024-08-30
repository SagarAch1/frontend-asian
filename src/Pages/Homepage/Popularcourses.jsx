import React from 'react';

const PopularCourses = () => {
  const courses = [
    { name: 'Social Science', link: '#' },
    { name: 'Accounting', link: '#' },
    { name: 'Engineering', link: '#' },
    { name: 'Pharmacy', link: '#' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        Popular courses among Nepalese students
        <span style={styles.underline}></span>
      </h2>
      <div style={styles.courseGrid}>
        {courses.map((course, index) => (
          <a key={index} href={course.link} style={styles.courseCard}>
            {course.name}
            <span style={styles.arrow}>&#x2192;</span>
          </a>
        ))}
      </div>
      <a href="#" style={styles.viewAllLink}>View all courses &#x2192;</a>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    position: 'relative',
  },
  underline: {
    content: '""',
    display: 'block',
    width: '50px',
    height: '3px',
    backgroundColor: '#FF5733',
    margin: '5px auto 0',
  },
  courseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 courses per row
    gap: '20px',
    justifyContent: 'center',
  },
  courseCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 25px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#000',
    fontWeight: '500',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  arrow: {
    fontSize: '18px',
  },
  viewAllLink: {
    display: 'block',
    marginTop: '20px',
    color: '#007BFF',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default PopularCourses;
