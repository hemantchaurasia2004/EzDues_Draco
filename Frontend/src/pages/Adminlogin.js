import React, { useState } from "react";
import "../style/adminlogins.css";
import heroImage from "../images/Loginimage.svg";

export default function Login() {
  return (
    <div className="login">
      <h2 className="logo">EzDues</h2>
      <div className="mainContainer">
        <div className="leftFrame">
          <div className="tuxt">
            <h1 className="title">Sign in</h1>
          </div>
          <button href="#" className="loginButton">
            Sign In using Outlook
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              fill="none"
              viewBox="0 0 40 32"
            >
              <rect width="20" height="28" x="10" y="2" fill="#1066B5" rx="2" />
              <rect width="20" height="28" x="10" y="2" fill="url(#a)" rx="2" />
              <path fill="#32A9E7" d="M10 5h10v10H10z" />
              <path fill="#167EB4" d="M10 15h10v10H10z" />
              <path fill="#32A9E7" d="M20 15h10v10H20z" />
              <path fill="#58D9FD" d="M20 5h10v10H20z" />
              <mask
                id="c"
                width="24"
                height="16"
                x="8"
                y="14"
                maskUnits="userSpaceOnUse"
              >
                <path
                  fill="url(#b)"
                  d="M8 14h22a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V14Z"
                />
              </mask>
              <g mask="url(#c)">
                <path fill="#135298" d="M32 14v4h-2v-4h2Z" />
                <path fill="url(#d)" d="M32 30V16L7 30h25Z" />
                <path fill="url(#e)" d="M8 30V16l25 14H8Z" />
              </g>
              <path
                fill="#000"
                fill-opacity=".3"
                d="M8 12a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8V12Z"
              />
              <rect width="18" height="18" y="7" fill="url(#f)" rx="2" />
              <path
                fill="#fff"
                d="M14 16.07v-.167C14 13.023 11.927 11 9.016 11 6.089 11 4 13.036 4 15.93v.167C4 18.977 6.073 21 9 21c2.911 0 5-2.036 5-4.93Zm-2.358.027c0 1.911-1.075 3.06-2.626 3.06-1.55 0-2.643-1.176-2.643-3.088v-.166c0-1.911 1.076-3.06 2.627-3.06 1.535 0 2.642 1.176 2.642 3.088v.166Z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="10"
                  x2="30"
                  y1="16"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#064484" />
                  <stop offset="1" stop-color="#0F65B5" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="8"
                  x2="32"
                  y1="26.769"
                  y2="26.769"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1B366F" />
                  <stop offset="1" stop-color="#2657B0" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="32"
                  x2="8"
                  y1="23"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#44DCFD" />
                  <stop offset=".453" stop-color="#259ED0" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="8"
                  x2="32"
                  y1="23"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#259ED0" />
                  <stop offset="1" stop-color="#44DCFD" />
                </linearGradient>
                <linearGradient
                  id="f"
                  x1="0"
                  x2="18"
                  y1="16"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#064484" />
                  <stop offset="1" stop-color="#0F65B5" />
                </linearGradient>
              </defs>
            </svg>
          </button>
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
