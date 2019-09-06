import React, { PureComponent } from 'react'
import { Link } from '../../../server/routes'
import { Menu, Layout, Icon, Tag } from 'antd'

import './Navigation.scss'


class NavBar extends PureComponent {
  render() {
    return (
      <Layout.Header theme="light" className="header">
        <div className="logo">
          <span>Thunder Band</span>
        </div>
        <Menu
          className="nav-bar"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[ '1' ]}
        >
          <Menu.Item key="1">
            <Link route='main'>
              <a title="Home">
                <Icon type="setting"/>Home
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link route='about'>
              <a title="About">
                <Icon type="appstore"/>About
              </a>
            </Link>
          </Menu.Item>
          <Tag className="version-tag" color="#f50">v0.000.01</Tag>
        </Menu>
      </Layout.Header>
    )
  }
}

export default NavBar
