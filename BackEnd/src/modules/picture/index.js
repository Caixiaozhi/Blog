import _ from 'lodash'
import dateTime from 'date-time'
import { md5 } from 'app/lib/utils/crypto'

import {
    uploadFiles,
    generateOssUrl,
} from 'app/modules/upload'
import {
    insertPicture,
} from 'app/modules/picture/create'
import { ossFile } from 'config'

const uploadPics = async (files) => {
    const opts = []
    const picsUrl = []
    let currentTime = dateTime()
    _.map(files, (file) => {
        let { originalname } = file
        // file.originalname = name
        file.filename = md5(new Buffer(`${originalname}.${currentTime}`)).slice(0, 15)
        return file
    })
    let picsInOss = await uploadFiles(files, ossFile.picture)
    picsInOss.forEach((pic) => {
        let picUrl = generateOssUrl(pic)
        picsUrl.push(picUrl)
        opts.push(insertPicture(picUrl, pic))
    })
    await Promise.all(opts)
    return [200, {
        errno: 0,
        data: picsUrl
    }]
}

export {
    uploadPics,
}