/**
 *
 * Name: Login
 * Date: 2018-01-22 15:12:44
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as acts from './actions'
import selector from './selector'
import styles from './styles'
import { Button } from 'antd';
import { locale } from 'moment';


class Login extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: {},
  }

  state = {
    stateData: {},

  }

  click = (e) => {
    console.log(e)
  }

  render() {
    return (
      <body>
        <div>
          <Button className={styles.register} onClick={() => window.location = 'register_page'} type="default">注册</Button>
          <Button className={styles.login} onClick={()=>window.location='login_page'}type="primary">登录</Button>
        </div>
      </body>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
