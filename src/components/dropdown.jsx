import React, { Component } from "react";

import { Menu, Dropdown, Icon } from "antd";

class OverlayVisible extends Component {
  state = {
    visible: false
  };

  handleMenuClick = e => {
    if (e.key === "3") {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item>
          <a
            target="_blank"
            rel="View Link"
            href="https://drive.google.com/file/d/1q13LJ8pxlnQyghZIo4TkkYlD1IdH5n23/view?usp=sharing"
          >
            View my Resume
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="Download Link"
            href="https://drive.google.com/uc?export=download&id=1q13LJ8pxlnQyghZIo4TkkYlD1IdH5n23"
          >
            Download my Resume
          </a>
        </Menu.Item>
        <Menu.Item key="3" onClick={this.handleMenuClick}>
          Close
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" href="#">
          Check my Resume <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}

export default OverlayVisible;
