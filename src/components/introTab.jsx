import React, { Component } from "react";
import Pane1 from "./about";
import Pane2 from "./work";
import Pane3 from "./contact";
import { Tabs, Button } from "antd";
import { Link, BrowserRouter } from "react-router-dom";
const { TabPane } = Tabs;

const operations = <Button type="primary">Nahian Alam</Button>;

class tab1 extends Component {
  state = {};
  render() {
    return (
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="About" key="1">
          <Pane1></Pane1>
        </TabPane>
        <TabPane tab="Work" key="2">
          <Pane2></Pane2>
        </TabPane>
        <TabPane tab="Contact" key="3">
          <Pane3></Pane3>{" "}
        </TabPane>
      </Tabs>
    );
  }
}

export default tab1;
