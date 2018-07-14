/**
 *
 * Name: Blog
 * Date: 2018-07-07 16:17:58
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as acts from './actions'
import selector from './selector'
import styles from './styles'

class Blog extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: {},
  }

  state = {
    stateData: {},
  }

  render() {
    return (
      <div className={styles.container}>
      this is Blog
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
