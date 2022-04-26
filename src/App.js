import logo from './logo.svg';
import React from 'react';
import {Button,Layout} from 'antd'
import { Route, Link } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import {Space} from 'antd'
import Routing from './Pages/Routing';
import './App.css';
const { Header } = Layout;
function App() {
  return (
    <div className='App'>
      <Layout>
        <Header style={{ padding: 10 }}>
          <Title style={{ color: 'white', float: 'left' }} level={3}>Welcome</Title>
          <div className='navbar' style={{ float: 'right', marginLeft: '300px', paddingRight: '50px' }} >
            <Space>
            <Button>
              <Link to="/">Login</Link>
            </Button>
            <Button>
              <Link to="analytics">Analytics</Link>
            </Button>
            </Space>
            <Routing/>
          </div>
        </Header>
      </Layout>

    


    </div>
  );
}

export default App;
