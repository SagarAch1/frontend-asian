import React from "react";
import FormPage from "../Pages/Homepage/FormPage";
import "./Blog.css"; // Link to updated CSS styles

const Createbalanceinfestival = () => {
  return (
    <div className="blog-container">
      {/* Top Section */}
      <div className="header-section">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`}
          alt="Consultancy"
          className="blog-header-image"
        />
        <div className="blog-header-text">
          <h1>How to Balance Study During Dashain and Tihar Festival</h1>
          <p>
            Tips for Nepali Students
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog-content">
        <div className="blog-date">
          <span>October 16, 2024</span>
        </div>

        <div className="blog-main">
          <h2>Studying During Festivals</h2>
          <p>
            Dashain and Tihar, Nepal’s most celebrated festivals, bring with them joy, family gatherings, and a break from the usual routine. However, for students, especially those preparing for important exams like the IELTS, TOEFL, SAT, or university entrance tests, balancing the festive atmosphere with study commitments can be quite challenging. Managing both is possible with the right approach, ensuring that students make the most of the celebrations without compromising their academic goals.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`}
            alt="Blog image"
            className="blog-main-image"
          />
        </div>

        {/* Additional Content - Inserted Section */}
        <div className="additional-section">
          <h3>Why Study During Festivals?</h3>
          <p>
            Festivals are an important part of life, offering relaxation and a chance to reconnect with loved ones. But for students with exams on the horizon, these periods are also an opportunity to reinforce learning and make progress. Here’s why continuing your study routine during Dashain and Tihar is essential:
          </p>
          <ul>
            <li>Consistent Progress: Taking long breaks during the festive season can disrupt your study flow. Short but consistent study sessions help retain knowledge and ensure that no momentum is lost.</li>
            <li>Exam Timelines: Many standardized tests like IELTS or SATs are conducted year-round. If your exam date falls shortly after the festive period, staying on track is crucial for success.</li>
          </ul>

          <h3>Tips to Balance Study and Festivities</h3>
          <p>Here are some practical tips Nepali students can follow to effectively balance their studies and enjoy the festivals:</p>
          <ol>
            <li>
              <strong>Create a Flexible Study Schedule:</strong> The festive period often involves spontaneous plans and events. Create a flexible study schedule that adjusts to the activities of the day.
            </li>
            <li>
              <strong>Prioritize Key Subjects or Topics:</strong> Focus on your most important subjects. Break down your syllabus and choose areas that require more attention.
            </li>
            <li>
              <strong>Use Short Study Sessions:</strong> Opt for shorter, more frequent study sessions using techniques like the Pomodoro technique (25 minutes of study followed by a 5-minute break).
            </li>
            <li>
              <strong>Study While Traveling:</strong> Carry light study materials during travels to relatives and use that time wisely.
            </li>
            <li>
              <strong>Avoid Distractions During Study Hours:</strong> Communicate your study plans with your family to reduce interruptions.
            </li>
            <li>
              <strong>Reward Yourself:</strong> Incorporate rewards into your study schedule to increase motivation.
            </li>
            <li>
              <strong>Use Technology to Stay on Track:</strong> Utilize study apps like Trello, Google Calendar, or educational videos to keep organized.
            </li>
          </ol>
        </div>

        {/* Importance of Mental Rest During Festivals */}
        <div className="additional-section">
          <h3>Importance of Mental Rest During Festivals</h3>
          <p>
            Festivals are not just a time for celebrations but also for mental relaxation. Use the Dashain and Tihar holidays to recharge your energy. A well-rested mind is better equipped to retain information and solve problems effectively.
          </p>
        </div>

        {/* Conclusion Section */}
        <div className="additional-section">
          <h3>Conclusion: Celebrate and Study</h3>
          <p>
            Balancing study with festive celebrations can be tricky, but with the right approach, Nepali students can manage both. By creating a flexible schedule, using travel time productively, and staying focused during short study sessions, you can enjoy the Dashain and Tihar festivities while also progressing academically. Remember, balance is the key—celebrate these beautiful festivals with your family while staying committed to your goals.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <FormPage />
      </div>
    </div>
  );
};

export default Createbalanceinfestival;
