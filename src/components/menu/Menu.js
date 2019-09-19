import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../../server/routes'

import { Menu as AntdMenu, Icon } from 'antd'


class Menu extends Component {
  static propTypes = {
    config: PropTypes.array.isRequired,
  }
  static defaultProps = {}

  state = {
    defaultSelectedKeys: this.props.config[0].route,
  }

  render() {
    const {defaultSelectedKeys} = this.state
    const {config} = this.props
    return (
      <AntdMenu
        mode="vertical-right"
        defaultSelectedKeys={defaultSelectedKeys}
        style={{height: '100%'}}
      >
        {
          config &&
          config.map(item => <AntdMenu.Item key={ item.route }>
            <Link route={ item.route }>
              <a title={ item.name }>
                { item.iconType && <Icon type={ item.iconType }/> }{ item.name }
              </a>
            </Link>
          </AntdMenu.Item>)
        }
      </AntdMenu>
    )
  }
}

export default Menu
