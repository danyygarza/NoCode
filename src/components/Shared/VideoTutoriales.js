import React from 'react';
import { Layout } from 'antd';
import './VideoTutoriales.css';
import 'antd/dist/antd.css';


//components
import Navbar from '../Shared/Navbar';

export default function Inicio() {
 
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <>
     <Layout>
      <Navbar />
      <Layout>
        <Header className='header'>VIDEO TUTORIALES</Header>
        <hr />
        <Content>
          <p className='content'>cartas con video tutoriales</p>
        </Content>
      </Layout>
     </Layout>
    
    </>
  )
}
