// import React from 'react';
import './App.css';

const HowToBuy = () => {
    return (
        <div id="how-to-buy">
            <div><h1>How to buy?</h1></div>
            <div className="how-to-buy-container">

                <div className="how-to-buy-card">
                    <h3>Download Phantom</h3>
                    <p>
                        Download the Phantom wallet from the App Store or as a Chrome extension to get started.
                    </p>
                </div>
                <div className="how-to-buy-card">
                    <h3>Purchase Solana</h3>
                    <p>
                        Buy Solana on any centralized exchange or directly on the Phantom wallet.
                    </p>
                </div>
                <div className="how-to-buy-card">
                    <h3>Swap for $chillputin</h3>
                    <p>
                        Visit <a href="https://pump.fun/coin/F647zieYq5Gt4tVFX8JfJMig1AXKZQ8zCciiJmWFpump" target="_blank" rel="noopener noreferrer">pump.fun</a>, paste the contract address (CA), or follow the link to swap your SOL for $chillputin.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
