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
import { Input, Tag, Tooltip, Icon, Button, notification } from 'antd'
import * as acts from './actions'
import selector from './selector'
import styles from './styles'

const openNotifivationWithIcon = (type) => {
  notification[type]({
    message: '发表失败',
    description: '请填写文章标题、标签、内容、作者',
  })
}

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.editor = null
    this.saveInputRef = input => this.input = input
    this.state = {
      inputVisible: false,
      inputValue: '',
      title: '',
      author: '',
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
    this.editor.customConfig.uploadImgServer = '/api/picture'  // 上传图片到服务器
    this.editor.create()
    this.editor.$textContainerElem[0].style.height = '700px'
  }

  handleOnClickPublishBtn = () => {
    const {
      title,
      author,
    } = this.state
    const {
      tags,
    } = this.props
    if (title && author && (!tags.isEmpty())) {
      // console.log('tags: ', tags.toList().toJS())
      this.props.actions.publishArticleAction({
        title,
        author,
        content: this.editor.txt.html(),
        tags: tags.toList().toJS(),
      })
    } else {
      openNotifivationWithIcon('info')
    }
  }

  handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    switch (name) {
      case 'tag':
        this.setState({
          inputValue: value
        })
        break
      case 'title':
        this.setState({
          title: value
        })
        break
      case 'author':
        this.setState({
          author: value
        })
        break
    }
  }

  handleInputConfirm = () => {
    const { inputValue } = this.state
    const { tags } = this.props
    if (inputValue && !tags.includes(inputValue)) {
      this.props.actions.addTagsAction({ addTag: inputValue })
    }
    this.setState({
      inputVisible: false,
      inputValue: '',
    })
  }

  handleClose = (removedTag) => {
    this.props.actions.deleteTagsAction({
      removedTag,
    })
  }

  showInput = () => {
    this.setState({
      inputVisible: true,
    }, () => {
      this.input.focus()
    })
  }

  render() {
    const {
      tags,
    } = this.props
    const {
      inputVisible,
      inputValue,
      title,
      alertVisible,
    } = this.state
    return (
      <div className={styles.container}>
        <div>
          <p>请输入文章标题：</p>
          <Input name='title' placeholder='文章标题' onChange={this.handleInputChange} />
        </div>
        <div>
          <p>请输入作者</p>
          <Input name='author' placeholder='作者' onChange={this.handleInputChange} />
        </div>
        <div className={styles.tagsContainer}>
          <p>文章标签</p>
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20
            const tagElem = (
              <Tag key={tag} afterClose={() => this.handleClose(tag)} closable={true}>
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            )
            return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem
          }).toList().toJS()}
          {inputVisible && (
            <Input
              name='tag'
              ref={this.saveInputRef}
              type='text'
              size='small'
              style={{ width: 78 }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag
              onClick={this.showInput}
              style={{ background: '#fff', borderStyle: 'dashed' }}
            >
              <Icon type='plus' />增加标签
            </Tag>
          )}
        </div>
        <div ref="editorElem" style={{ textAlign: 'left' }}></div>
        <Button onClick={this.handleOnClickPublishBtn}>发表</Button>
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
