import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="navigation-bar">
    <div id="navigation-container">
      <a href="index.html"><img src="./assets/logo.png" width="100"/></a>
      <ul>
        <li><a href="about.html">about</a></li>
        <li><a href="work.html">work</a></li>
        <li><a href="https://github.com/jessmaple">github</a></li>
        <li><a href="https://www.linkedin.com/in/jessmaple/">linkedin</a></li>
        <li><a href="resume.html">resume</a></li>
      </ul>
    </div>

    <div className="container">
      <p className="title">
        <h1>Hi! I'm Jessica Maple, a full-stack developer
          <br/>
          based in Atlanta, Georgia
        </h1>
      </p>
    </div>
    <br/>
    <br/>
    <div className="footer">
      <p>© jessica maple 2020 | All Rights Reserved</p>
    </div>
  </div>
  </div>
  );
}

export default App;
