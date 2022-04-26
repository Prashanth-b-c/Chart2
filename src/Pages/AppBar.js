

import React from 'react';
import {Button,Layout} from 'antd'
import { Link } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import {Space} from 'antd'
// import Routing from './Pages/Routing';
import '../App.css';
const { Header } = Layout;

function AppBar() {
  return (
    <div className='App'>
      <Layout>
        <Header style={{ padding: 10 }}>
          <Title style={{ color: 'white', float: 'left' }} level={3}>Welcome</Title>
          <div className='navbar' style={{ float: 'right', marginLeft: '300px', paddingRight: '50px' }} >
            <Space>
            <Button>
              <Link to="/login">Login</Link>
            </Button>
            {/* <Button>
              <Link to="analytics">Analytics</Link>
            </Button> */}
            </Space>
          </div>
        </Header>
      </Layout>

    


    </div>
  );
}

export default AppBar;