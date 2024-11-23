// import React from 'react';
import './App.css'; // Import the CSS file

const MissionNew = () => {
  return (
    <div className="mission-container">
      <h1 className="mission-title">Mission</h1>
      <div className="mission-content">
        <div className="mission-text">
          <h2 className="mission-subtitle">ChillPutin: Peace, Laughter, and Chill Vibes Only</h2>
          <p className="mission-paragraph">
            Welcome to <strong>ChillPutin</strong>, the memecoin where peace meets memes in the most epic way possible.
            We’re here to spread good vibes, unity, and a whole lot of chill. Because, let’s face it, the world could
            use a little more "relax and let it go," right?
          </p>
          <p className="mission-paragraph">
            Our mission? To remind the world that even in the craziest of times, we can all <strong>#StayChill</strong>.
            With <strong>ChillPutin</strong>, we’re not just trading coins—we’re trading peace, laughter, and positive
            energy, one meme at a time.
          </p>
          <p className="mission-paragraph">
            We believe in the power of memes to bring people together and shift the focus from chaos to calm. So grab
            your ChillPutin, kick back, and remember: no matter what’s going down, we can always find a way to{' '}
            <strong>#Chill</strong> and keep it peaceful.
          </p>
          <p className="mission-paragraph">
            <strong>Peace, love, and ChillPutin!</strong> 🌍✌️
          </p>
        </div>
        <div className="mission-image-container">
          <img
            src="https://example.com/your-image-url-here.png" // Replace with your image URL
            alt="ChillPutin in a pool"
            className="mission-image"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionNew;
