import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from '../Header/Header'

// import 'bootstrap/dist/css/bootstrap-grid.css'
import './AppLayout.scss'


const {Content} = Layout

class AppLayout extends Component {
  render() {
    return <>
      <Layout className="__layout">
        <Header/>
        <Content className="container">
          {this.props.children}
        </Content>
      </Layout>
    </>
  }
}

export default AppLayout