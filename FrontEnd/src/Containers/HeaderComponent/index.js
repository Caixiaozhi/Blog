/**
 *
 * Name: HeaderComponent
 * Date: 2018-01-11 16:56:24
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { fromJS } from 'immutable';
import { Menu, Dropdown, Icon } from 'antd'
import * as acts from './actions'
import selector from './selector'
import styles from './styles'

const menu = (
  <Menu>
    <Menu.Item>
      <Link to={'/userinfo'} >我的信息</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={"/logout"} >退出登录</Link>
    </Menu.Item>
  </Menu>
)

class HeaderComponent extends React.Component {
  static propTypes = {
    /* actions */
    actions: PropTypes.object.isRequired,
    /* 用户的个人信息 */
    userInfo: ImmutablePropTypes.map,

  }
  componentWillMount() {
    //获取用户信息
    this.props.actions.getUserInfoAction()
  }
  render() {
    const {
      userInfo
    } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          管理端
              </div>
        <div className={styles.userInfo}>
          <img className={styles.avatar} src={userInfo.get('avatar')} />
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              {userInfo.get('name')} <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return selector
}

const mapDispatchToProps = (dispatch) => {
  const actions = {
    ...acts,
  }
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
