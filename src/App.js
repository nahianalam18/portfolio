import React, { Component } from "react";
import HomeTab from "./components/introTab";
import ScrollableAnchor from "react-scrollable-anchor";
import "./App.css";

class App extends Component {
  state = {
    name: "Nahian Alam"
  };
  handlesomething() {
    console.log("It's working");
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <ScrollableAnchor id={"test"}>
            <HomeTab />
          </ScrollableAnchor>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
