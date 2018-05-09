/**
 *
 * Name: TestComponent
 * Date: 2018-01-15 10:05:07
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

export default class TestComponent extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: {},
  }

  state = {
    data: 'caixiaozhi',
  }

  render() {
    const {
      data,
    } = this.props
    const {
      stateData,
    } = this.state
    return (
      <div className={styles.container}>
        {this.state.data}000000
      </div>
    )
  }
}
