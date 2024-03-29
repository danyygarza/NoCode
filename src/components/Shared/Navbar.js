import {
  HomeOutlined,
  PlayCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Switch} from "antd";
import React, {useState} from "react";
import "antd/dist/antd.css";
import "./Navbar.css";
import { useAuth } from "../../context/authContext";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
//import { useThemeSwitcher } from "react-css-theme-switcher";

const onChange = (checked) => {
};

export default function Navbar() {
  const { user, logout, loading } = useAuth();
  const { Sider } = Layout;


  /*
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { switcher, themes } = useThemeSwitcher();
  const switchTheme = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
    switcher({ theme: isDarkMode ? themes.dark : themes.light });
  };
  */
  const navigate = useNavigate();


  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="logo" />
          {/* <p>Welcome {user.displayName || user.email}</p> */}
          <div>
            <img className="frida" src="favicon.ico" alt="logo" />
          </div>
          <Menu
            style={{
              backgroundColor: "black",
              color: "white",
              borderColor: "black",
            }}
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Link to="/inicio">
              <Menu.Item>
                <HomeOutlined className="homeoutlined" /> Home
              </Menu.Item>
            </Link>
            <Link to="/video-tutoriales">
              <Menu.Item>
                <PlayCircleOutlined className="homeoutlined" /> Video Tutorials
              </Menu.Item>
            </Link>
            {/*<div className="main fade-in">
                <Switch
                    checkedChildren="🌜"
                    unCheckedChildren="🌞"
                    checked={isDarkMode}
                    onChange={switchTheme}
                />
          </div>*/}
          </Menu>
          <div className="logout">
            <LogoutOutlined
              style={{ color: "white", marginLeft: "2" }}
              onClick={() => navigate("/")}
            />
          </div>
        </Sider>
      </Layout>
    </>
  );
}

/*
  const { Header, Content, Footer, Sider } = Layout;
  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));

  
  
  const Navbar = () => (
    
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <Menu style={{backgroundColor: 'black', color:'white', borderColor:'black'}} mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
        <p>Welcome {user.displayName || user.email}</p>
        <button onClick={handleLogout}>logout</button></Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            <p>long content</p>
            {
            // indicates very long content
            Array.from(
              {
                length: 100,
              },
              (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ),
            )
          }
          </div>
        </Content>
      </Layout>
    </Layout>
  );
  
  export default Navbar;

  */
