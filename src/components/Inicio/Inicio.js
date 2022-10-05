import React from 'react';
import { Layout } from 'antd';
import './Inicio.css';
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
        <Header className='header'>MI ESPACIO</Header>
        <hr />
        <Content>
          <p className='content'>MIS CARPETAS</p>
        </Content>
      </Layout>
     </Layout>
    
    </>
  )
}
