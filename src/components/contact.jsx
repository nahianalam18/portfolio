import React, { Component } from "react";
import gitlogo from "./github.png";
import linkedinlogo from "./linkedin.png";
import instagramlogo from "./instagram.png";
import emaillogo from "./email.png";

class Pane3 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="App-header">
          <h3 className="blueh">Check my Github</h3>
          <a href="https://github.com/nahianalam18">
            <img src={gitlogo} className="logoC" alt="logo"></img>
          </a>
        </div>
        <div className="App-header">
          <h3 className="blueh">Let's connect</h3>
          <a href="https://www.linkedin.com/in/nahian-alam-a2b521155/">
            <img src={linkedinlogo} className="logoC" alt="logo"></img>
          </a>
        </div>
        <div className="App-header">
          <h3 className="blueh">Follow me on Instagram</h3>
          <a href="https://www.instagram.com/nahian_alam/">
            <img src={instagramlogo} className="logoC" alt="logo"></img>
          </a>
        </div>
        <div className="App-header">
          <h3 className="ph">
            Send me an email -{" "}
            <a className="App-link" href="mailto:alam.nahian18@gmail.com">
              alam.nahian18@gmail.com
            </a>
          </h3>
          <a href="mailto:alam.nahian18@gmail.com">
            <img src={emaillogo} className="logoC" alt="logo"></img>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Pane3;
