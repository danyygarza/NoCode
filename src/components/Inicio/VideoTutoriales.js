
import React from 'react';
import { Layout } from 'antd';
import './Cards/Video.css';
import 'antd/dist/antd.css';


//components
import Navbar from '../Shared/Navbar';
import Video from './Cards/Video';

export default function Inicio() {
 
  const { Header, Content } = Layout;

  return (
    <>
     <Layout>
      <Navbar />
      <Layout>
        <Header className='header'>VIDEO TUTORIALES</Header>
        <Content>
          <Video />
        </Content>
      </Layout>
     </Layout>
    
    </>
  )
}
