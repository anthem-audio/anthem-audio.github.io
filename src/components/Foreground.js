import React from 'react';
import logo from '../logo.svg';

function Foreground(props) {
    return (
        <div className="foreground">
            <div className="spacer" />
                <div className="horizontal-center">
                    <div className="spacer" />
                    <div className="foreground-content">
                        <img src={logo} alt="" className="logo" />
                        <div className="blurb">
                            <div className="spacer" />
                            <h1>Anthem</h1>
                            <h2>Music production for all.</h2>
                            <p></p>
                            <div className="spacer" />
                        </div>
                    </div>
                    <div className="spacer" />
                </div>
            <div className="spacer" />
        </div>
    );
}

export default Foreground;