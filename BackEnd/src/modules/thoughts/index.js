import _ from 'lodash'
import { ossFile } from 'config'

import { 
  uploadToOSS,
  generateOssUrl,
} from 'app/modules/upload'
import {
  insertThoughts
} from 'app/modules/thoughts/create'

const createThoughts = async (content, file) => {
  const fileInOss = await uploadToOSS(file, ossFile.picture)
  if(fileInOss === false) {
    return [500, 'upload file fail']
  }
  const fileUrl = generateOssUrl(fileInOss)
  const thoughtId = await insertThoughts(content, fileUrl)
  return [200, {
    thoughtId,
  }]
}

export {
  createThoughts,
}