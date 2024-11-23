// import React from 'react';
import './App.css'; // Import your CSS file
import headingPutin from './assets/heading-putin.png';

const HeaderPart = () => {
    return (
        <div className='heading-image-wrapper'>
            <img src={headingPutin} alt="Heading Chill Putin"/>
        </div>
    );
};

export default HeaderPart;
