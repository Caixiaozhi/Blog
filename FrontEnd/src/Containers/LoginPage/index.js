/**
 *
 * Name: LoginPage
 * Date: 2018-01-29 20:40:38
 * Description: This is a container component
 * Author: wymhuster
 * Organization: ELWG
 *
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as acts from './actions'
import selector from './selector'
import styles from './styles'
import { Input, Button } from 'antd'

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
  }

  state = {
    account: '',
    password: '',
  }


  handleAccountChange = (event) => {
    this.setState({
      account: event.target.value,
    })
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  handleSubmitClick = (event) => {
    const {email, password} = this.state
    this.props.actions.getAuthorInfoAction({
      email,
      password,
    })
  }

  handleResetClick = (event) => {
    this.setState({
      password: '',
      account: ''
    })
    // console.log(this)
  }


  render() {
    const { account, password } = this.state

    return (
      <div className={styles.loginPage}>
        <div className={styles.login}>
          <h1>登录</h1>
          <input className={styles.account} value={account} onChange={this.handleAccountChange} placeholder="账号" />
          <input className={styles.password} value={password} onChange={this.handlePasswordChange} placeholder="密码" />
          <Button className={styles.submit} onClick={this.handleSubmitClick} type='Primary'>提交</Button>
          <Button className={styles.reset} onClick={this.handleResetClick} type='Default'>重置</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
