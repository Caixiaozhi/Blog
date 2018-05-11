/**
 *
 * Name: Edit
 * Date: 2018-05-10 19:52:15
 * Description: edit article
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import E from 'wangeditor'
import lodash from 'lodash'
import * as acts from './actions'
import selector from './selector'
import styles from './styles'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.editor = null
    this.state = {
      editorContent: ''
    }
  }
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: {},
  }

  componentDidMount() {
    const elem = this.refs.editorElem
    this.editor = new E(elem)
    this.editor.customConfig.onchange = html => {
      // lodash.throttle(, 100)
      console.log('save!');
      this.setState({
        editorContent: html,
      })
    }
    this.editor.customConfig.onchangeTimeout = 200;
    // this.editor.$textElem[0].setAttribute('height', '500px');
    this.editor.create()
    this.editor.$textElem[0].setAttribute('height', '100px')
  }

  handleOnEditorContent = () => {
    console.log(this.state.editorContent)
  }

  handleAutoComplete = () => {
    console.log('throttle')
  }

  render() {
    return (
      <div className={styles.container}>
        <div ref="editorElem" style={{textAlign: 'left'}}>
        </div>
        <button onClick={this.handleOnEditorContent}>获取内容</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
