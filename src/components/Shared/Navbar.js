import {
    UserOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './Navbar.css'
import { useAuth } from '../../context/authContext'



export default function Navbar() {
    const { user, logout, loading } = useAuth();
    const { Header, Content, Footer, Sider } = Layout;
    const items = [
        UserOutlined
    ].map((icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
    }));


    console.log(user);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return <h1>loading</h1>
    }

    return (
        <>
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
                    <p>Welcome {user.displayName || user.email}</p>
                    <Menu style={{ backgroundColor: 'black', color: 'white', borderColor: 'black' }} mode="inline" defaultSelectedKeys={['4']} items={items} />
                    <div className="logout"><LogoutOutlined style={{color:'white', marginLeft: '2'}} onClick={handleLogout} /></div>
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
                    </Header>
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

        </>
    )
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