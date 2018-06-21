/**
 *
 * Name: Contact
 * Date: 2018-06-21 11:01:00
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styles from './styles'

class Contact extends React.PureComponent {

  constructor(this) {
    super(this)
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles.container}>
        联系页面
      </div>
    )
  }
}



