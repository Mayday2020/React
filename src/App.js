//import React, { Component } from 'react';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <div className="header-icon"></div>
      </header>
      <nav className="nav">
        <ul className="sidebar">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <div className="content">
        <div className="content-img"></div>
        <div className="avatar-img">
          avatar + description
        </div>
        <div className="post">
          my post
          <div>
            new post
          </div>
          <div>
            posts
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
