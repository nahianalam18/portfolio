import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

class Lay extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px", color: "pink" }}
          >
            <Menu.Item key="1">About Me</Menu.Item>
            <Menu.Item key="2">Work</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }} />
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              Hello Hello Hello Amigo
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}> Nahian Alam </Footer>
      </Layout>
    );
  }
}

export default Lay;
