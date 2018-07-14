/**
 *
 * Name: ImageCropper
 * Date: 2018-07-09 17:13:00
 * Description: pure component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import ReactCrop from 'react-image-crop'
import { Button } from 'antd'
import 'react-image-crop/dist/ReactCrop.css'
import styles from './styles'

function getCroppedImg(image, pixelCrop, fileName) {

  const canvas = document.createElement('canvas');
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  // As Base64 string
  // const base64Image = canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      file.name = fileName;
      resolve(file);
    }, 'image/jpeg');
  });
}

export default class ImageCropper extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: {},
  }

  state = {
    crop: {},
  }

  render() {
    const {
      imageSource,
      disabled,
    } = this.props
    const {
      crop,
    } = this.state
    return (
      <div className={styles.container}>
        <ReactCrop
          src= { imageSource }
          crop = { crop }
          onChange = { this.handleOnImageCropChange }
          disabled = { disabled }
        />
        <Button>保存</Button>
      </div>
    )
  }
}
