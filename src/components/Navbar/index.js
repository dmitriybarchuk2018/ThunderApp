import React, { PureComponent } from 'react'
import { Link } from '../../../server/routes'
import { Layout, Icon, Tag } from 'antd'

import Menu from '../menu/Menu'
import './Navigation.scss'


const CONFIG = [
  {
    name: 'Home',
    route: 'main',
    iconType: 'setting',
  },
  {
    name: 'About',
    route: 'about',
    iconType: 'appstore',
  },
]

class NavBar extends PureComponent {
  render() {
    return (
      <Layout.Sider width={200} style={{background: '#fff'}}>
        <Menu config={CONFIG}/>
      </Layout.Sider>
    )
  }
}

export default NavBar
