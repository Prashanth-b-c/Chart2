import React from 'react'
import Account from './Account'
import {Button,Layout} from 'antd'
import { Route, Link } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import {Space} from 'antd'

const { Header } = Layout;

const Dashboard = () => {
    return(
        <div className='dashboard'>
         <Layout>
        <Header style={{ padding: 10 }}> 
          <Title style={{ color: 'white', float: 'left' }} level={3}>Dashboard</Title> 
          <div className='navbar' style={{ float: 'right', marginLeft: '50px', paddingRight: '50px' }} level={3} >
            <Space> 
            <Button>
              <Link to="/">LogOut</Link>
            </Button>


            <Button>
              <Link to="analytics">Analytics</Link>
            </Button>
           

            </Space>
            <Account/>
          </div>
        </Header>
      </Layout> 
        </div>
    )
}

export default Dashboard