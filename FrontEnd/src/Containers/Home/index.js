/**
 *
 * Name: Home
 * Date: 2018-06-04 16:28:04
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as acts from './actions'
import selector from './selector'
import styles from './styles'

class Home extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: {},
  }
  constructor(props) {
    super(props)
    this.state = {
      bodyBackgroundColor: '#ffffff',
    }
  }

  randomHexColor = () => {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)
  }

  backgroundColorChangeHandler = () => {
    let bodyBackgroundColor = this.randomHexColor()
    this.setState({
      bodyBackgroundColor,
    })
  }
  componentWillMount() {
    this.backgroundColorChangeHandler()
  }

  render() {
    const { bodyBackgroundColor, } = this.state

    return (
      <div className={styles.container} style={{
        backgroundColor: bodyBackgroundColor,
      }}>
        <div className={styles.contentContainer}>
          <div className={styles.contentInner}>
            <div className={styles.header}>
              <div className={styles.headerInner}>
                <h1 onClick={this.backgroundColorChangeHandler}>我的个人网站</h1>
                <p>My Personal Website</p>
              </div>
            </div>
            <div className={styles.alpha}>
              <div className={styles.alphaInner}>
                <div className={styles.pageAlpha}>
                  <p>» <Link to="/blog">日志</Link></p>
                  <p>» <Link to="/character">随手</Link></p>
                </div>
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.footerInner}>
              <p><Link to="/contact">contact</Link> | Caixiaozhi</p>
              </div>
            </div>
          </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
