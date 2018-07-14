/**
 *
 * Name: EditThoughts
 * Date: 2018-07-07 16:42:00
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button, Upload, Icon, message, Spin } from 'antd'
import { connect } from 'react-redux'
import E from 'wangeditor'
import { bindActionCreators } from 'redux'
import ImageCroppper from "_components/ImageCropper";
import * as acts from './actions'
import selector from './selector'
import styles from './styles'

class EditThoughts extends React.Component {
  constructor(props) {
    super(props)
    this.editor = null
    this.state = {
      uploadLoading: false,
      coverImageUrl: '',
      coverFile: '',
    }
  }
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: {},
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  beforeUpload = (file) => {
    const isImage = (file.type === 'image/bmp') ||
                    (file.type === 'image/png') ||
                    (file.type === 'image/jpg') ||
                    (file.type === 'image/jpeg')
    if(!isImage) {
      message.error('you can only upload image file')
    }
    const isLt5M = file.size / 1024 / 1024 < 5
    if(!isLt5M) {
      message('image must smaller than 5MB!')
    }
    return isImage && isLt5M
  }

  handleOnCoverUploadChange = (info) => {
    if(info.file.status === 'uploading') {
      this.setState({
        uploadLoading: true
      })
      return 
    }
    if(info.file.status === 'error') {
      URL.revokeObjectURL(this.state.coverImageUrl)
      let coverFile = info.file.originFileObj
      let coverImageUrl = URL.createObjectURL(coverFile)
      this.setState({
        coverImageUrl,
        coverFile,
        uploadLoading: false,
      })
    }
  }

  handleOnPublishThoughts = () => {
    let content = this.editor.txt.html()
    let coverFile = this.state.coverFile
    if(content && coverFile) {
      this.props.actions.initialPublishThoughtsStatusAction({
        status: 'doing',
        name: 'thoughts'
      })
      this.props.actions.publishThoughtsAction({
        content,
        coverFile,
      })
      this.setState({
        coverImageUrl: '',
        coverFile: '',
      })
      this.editor.txt.clear()
    } else {
      console.log('信息不完善')
    }

  }

  componentDidMount() {
    const elem = this.refs.editorElem
    this.editor = new E(elem)
    this.editor.customConfig.menus = [
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      'italic',  // 斜体
      'underline',  // 下划线
      'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式
      'quote',  // 引用
      'emoticon',  // 表情
      'table',  // 表格
      'code',  // 插入代码
      'undo',  // 撤销
      'redo'  // 重复
    ]
    this.editor.create()
    this.editor.$textContainerElem[0].style.height = '700px'
  }

  componentWillUnmount() {
    URL.revokeObjectURL(this.state.coverImageUrl)
  }

  render() {
    const {
      uploadLoading,
      coverImageUrl,
    } = this.state
    const {
      status,
    } = this.props
    const uploadButton = (
      <div>
        <Icon type = {uploadLoading ? 'loading' : 'plus'} />
        <div className = 'ant-upload-text'>上传封面</div>
      </div>
    )
    return (
      <div className={styles.container}>
        <Button onClick={this.handleOnPublishThoughts} disabled={status.get('publishThoughtsStatus') === 'doing'}>发表</Button>
        <Upload
          name = "thoughtsCover"
          listType = "picture-card"
          className = {styles.coverUploader}
          showUploadList = {false}
          beforeUpload = {this.beforeUpload}
          onChange = {this.handleOnCoverUploadChange}
        >
          {coverImageUrl ? <img style={{height: '140px',}} src={coverImageUrl} alt="cover" /> : uploadButton}
        </Upload>
        <div ref="editorElem" style={{textAlign: 'left'}}></div>
        {(status.get('publishThoughtsStatus') === 'doing') && 
          <div className={styles.spinContainer}>
            <Spin style={{position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', right: '50%'}} size="large" />
          </div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditThoughts)
