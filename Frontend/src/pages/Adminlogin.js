import React, { useState } from 'react';
import '../style/adminlogins.css';
import heroImage from '../images/Loginimage.svg';

export default function Login() {
    return (
        <div className="login">
            <h2 className="logo">EzDues</h2>
            <div className="mainContainer">
                <div className="leftFrame">
                    <div className="leftBox">
                        <h1 className="title">Sign in</h1>
                        <button href="#" className="loginButton">
                            Login
                        </button>
                    </div>
                </div>
                <div className="rightFrame">
                    <img
                        className="heroImage"
                        src={heroImage}
                        alt=""
                        height={400}
                        width={1000}
                    />
                    <div className="description">
                        <h3>Sign in to EzDues</h3>
                        <p>Cleaaring Dues made easy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
