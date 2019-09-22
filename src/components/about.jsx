import React, { Component } from "react";
// import { Tabs, Button, Menu, Dropdown, Icon } from "antd";
import "typeface-roboto";
import pp from "./Profile_picture.jpg";
import OverlayVisible from "./dropdown";

class Pane1 extends Component {
  state = {};

  render() {
    return (
      <div className="head">
        <br></br> <br></br>
        <img src={pp} className="avatar" alt="logo" />{" "}
        <h4 className="panes">
          I'm an aspiring Software Engineer pursuing a Computer Science degree
          at the{" "}
          <a className="App-link" href="https://www.uta.edu/">
            University of Texas at Arlington
          </a>
          <br></br>I am in my junior year and working towards graduating in May
          2021
        </h4>
        <OverlayVisible></OverlayVisible>
      </div>
    );
  }
}

export default Pane1;
