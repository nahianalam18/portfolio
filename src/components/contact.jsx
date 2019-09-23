import React, { Component } from "react";
import gitlogo from "./github.png";
import linkedinlogo from "./linkedin.png";
import instagramlogo from "./instagram.png";
import emaillogo from "./email.png";
import handshake from "./handshake.png";
import CollectionsPage from "./form";

class Pane3 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <img src={handshake} className="logoC" alt="logoC"></img>
          <br></br>
          <a href="https://github.com/nahianalam18">
            <img src={gitlogo} className="ssCcont" alt="logo"></img>
          </a>
          <a href="https://www.linkedin.com/in/nahian-alam-a2b521155/">
            <img src={linkedinlogo} className="ssCcont" alt="logo"></img>
          </a>
          <a href="https://www.instagram.com/nahian_alam/">
            <img src={instagramlogo} className="ssCcont" alt="logo"></img>
          </a>
          <a className="App-link" href="mailto:alam.nahian18@gmail.com"></a>
          <a href="mailto:alam.nahian18@gmail.com">
            <img src={emaillogo} className="ssCcont" alt="logo"></img>
          </a>
          <br></br>
          <footer>
            <p className="blueh">
              Contact information:{" "}
              <a className="App-link" href="mailto:alam.nahian18@gmail.com">
                alam.nahian18@gmail.com
              </a>
            </p>
            <p className="blueh">© Nahian Alam</p>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Pane3;
