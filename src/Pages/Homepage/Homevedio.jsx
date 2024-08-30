import React from 'react';

const videos = [
  {
    src: `${process.env.PUBLIC_URL}/assets/images/vid.mp4`,
    title: "What is your favourite place on campus?",
    answeredBy: "Louise Boyd"
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/vid.mp4`,
    title: "What are popular university clubs or activities for business students?",
    answeredBy: "Louise Boyd"
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/vid.mp4`,
    title: "Does the university provide career support?",
    answeredBy: "Louise Boyd"
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/vid.mp4`,
    title: "What are some of the challenges or problems faced by international students?",
    answeredBy: "Louise Boyd"
  },
];

const videoStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

const VideoSection = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1a1a2e' }}>
      <h2 style={{ color: 'white' }}>Hear from institutions</h2>
      <p style={{ color: '#ccc' }}>Our counsellors and institutions answer your burning questions in less than 30 seconds</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        {videos.map((video, index) => (
          <div key={index} style={{ flex: 1, textAlign: 'center', color: 'white' }}>
            <video style={videoStyle} controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p style={{ marginTop: '10px' }}>{video.title}</p>
            <p style={{ color: '#888' }}>Answered by <strong>{video.answeredBy}</strong></p>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '20px', color: '#f39c12', cursor: 'pointer' }}>More FAQs &gt;</p>
    </div>
  );
};

export default VideoSection;
