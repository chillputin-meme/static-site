// import React from 'react';
import './App.css';

const Socials = () => {
    return (
        <div id='socials'>
            <div><h1>Our Socials</h1></div>
            <div className="socials-container">
                <div className="social-card tiktok">
                    <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
                        <h3>TikTok</h3>
                    </a>
                </div>
                <div className="social-card twitter">
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <h3>Twitter</h3>
                    </a>
                </div>
                <div className="social-card telegram">
                    <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer">
                        <h3>Telegram</h3>
                    </a>
                </div>
                {/* <div className="social-card instagram">
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <h3>Instagram</h3>
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default Socials;
