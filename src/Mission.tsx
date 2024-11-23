// import React from 'react';
import './App.css'; // Import your CSS file

const Mission = () => {
    return (
        <div  id="mission" className='mission-wrapper'>
            {/* <img src='src/assets/heading-image-new.png'/> */}
            <div className='mission-header'>
                <h1>Mission</h1>
            </div>
            <div className='mission'>
                <div className='mission-text'>
                    <h1 style={{ textAlign: "left", color: "#007BFF", fontSize: "28px" }}>ChillPutin: Peace, Laughter, and Chill Vibes Only</h1>

                    <p>Welcome to <strong>ChillPutin</strong>, the memecoin where peace meets memes in the most epic way possible. We’re here to spread good vibes, unity, and a whole lot of chill. Because, let’s face it, the world could use a little more "relax and let it go," right?</p>

                    <p>Our mission? To remind the world that even in the craziest of times, we can all <strong>#StayChill</strong>. With <strong>ChillPutin</strong>, we’re not just trading coins—we’re trading peace, laughter, and positive energy, one meme at a time.</p>

                    <p>We believe in the power of memes to bring people together and shift the focus from chaos to calm. So grab your ChillPutin, kick back, and remember: no matter what’s going down, we can always find a way to <strong>#Chill</strong> and keep it peaceful.</p>

                    <p><strong>Peace, love, and ChillPutin!</strong> 🌍✌️</p>
                </div>
                <img src='src/assets/putin-pool.png' />
            </div>
        </div>
    );
};

export default Mission;
