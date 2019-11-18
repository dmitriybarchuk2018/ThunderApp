import React, { PureComponent } from 'react'
import { Icon as AntIcon, Layout } from 'antd'
import { Link } from '../../../server/routes'

import { NAV_CONFIG } from './constants'

import Icon from '../Icons'

import './Header.scss'


class NavBar extends PureComponent {

  renderNavigation = config => {
    return <div className="navigation">
      {config &&
      config.map((item, i) => <Link key={`header-navigation-${i}`} route={item.route}>
        <a title={item.name} className="nav-link">
          {item.name} {/* Paste normal Icons */}
        </a>
      </Link>)}
    </div>
  }

  renderLogoutLink = () => {
    return <Link route="main">
      <a title="logout" className="logout-link">Выйти <Icon.Logout/></a>
    </Link>
  }

  render() {
    return (
      <Layout.Header>
        <div className="Header container d-flex align-items-center">
          <Icon.Logo className="logo"/>
          {this.renderNavigation(NAV_CONFIG)}
          {this.renderLogoutLink()}
        </div>
      </Layout.Header>
    )
  }
}

export default NavBar
