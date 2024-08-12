import React, { useState } from 'react';
import Frame from 'react-frame-component';

const VideoSDKFrame: React.FC = () => {
  // State to manage whether the video is switched on
  const [isVideoOn, setIsVideoOn] = useState(false);

  // Toggle video state (e.g., triggered by a button click)
  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '85vh', backgroundColor: '#000' }}>
      <Frame
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
        initialContent={`<!DOCTYPE html><html><head><style>body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background-color:#000;}</style></head><body><div id="mountHere"></div></body></html>`}
        mountTarget="#mountHere"
      >
        {/* Embed the Zoom Video SDK URL */}
        <iframe
          src="https://zoom-videosdk-1-10-8.netlify.app"
          title="Zoom Video SDK"
          style={{ width: '100%', height: '720px', border: 'none', overflow: 'hidden' }}
          allow="camera; microphone; fullscreen; microphone; display-capture; autoplay; clipboard-write;"
          // allowFullScreen
        />
      </Frame>

      {/* Custom Video Component - rendered when video is on */}
      {isVideoOn && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            zIndex: 1000,
          }}
        >
          {/* Your custom video component logic */}
          <video
            width="100%"
            height="100%"
            controls
            autoPlay
            style={{ display: 'block' }}
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Button to toggle video on/off */}
      <button
        onClick={toggleVideo}
        style={{
          position: 'absolute',
          top: '16px',
          left: '30px',      
          zIndex: 1001,
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {isVideoOn ? 'Turn Video Off' : 'Turn Video On'}
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App" style={{
      width: '100%',
      height: '100%',
    }}>
      <h1>Zoom Video SDK</h1>
      <VideoSDKFrame />
    </div>
  );
};

export default App;
