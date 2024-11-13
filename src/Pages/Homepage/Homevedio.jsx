import React from 'react';

const videos = [
  {
    src: "https://www.youtube.com/embed/KeNwIImEsPU?rel=0", // Added rel=0 to disable related video recommendations
    title: "Study in Canada with High Scholarship?",
   
  },
  {
    src: "https://www.youtube.com/embed/9_q60X7HKww?rel=0", // Same for all videos
    title: "Documents Required for USA Visa Interview?",
    
  },
  {
    src: "https://www.youtube.com/embed/IJSf6J8l0n4?rel=0", 
    title: "General English Vs IELTS English?",
    
  },
  {
    src: "https://www.youtube.com/embed/ytFFFYGPWw4?rel=0", 
    title: "Band 7 IELTS Practice Speaking Test?",
    
  },
];

const videoStyle = {
  width: '100%',
  height: '500px', // Set a fixed height for the YouTube video iframe
  borderRadius: '8px',
};

const VideoSection = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1a1a2e' }}>
      <h2 style={{ color: 'white' }}>Hear from our institutions</h2>
      <p style={{ color: '#ccc' }}>We have answers to your questions</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        {videos.map((video, index) => (
          <div key={index} style={{ flex: 1, textAlign: 'center', color: 'white' }}>
            {/* Embedding YouTube video using iframe */}
            <iframe 
              style={videoStyle}  // Applying the custom video style
              src={video.src} 
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p style={{ marginTop: '10px' }}>{video.title}</p>
          
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default VideoSection;
