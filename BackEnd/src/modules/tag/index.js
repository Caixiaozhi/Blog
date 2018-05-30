import _ from 'lodash'
import { 
    insertTag,
} from 'app/modules/tag/create';
import {
    getTagByName,
} from 'app/modules/tag/retrieve'

const createTag =async (tag) => {
    let tagId = 0
    const isExist = await getTagByName(tag)
    if(_.isEmpty(isExist)) {
        const tagInsertId = await insertTag(tag)
        tagId = tagInsertId
    } else {
        tagId = isExist.id
    }
    return tagId
}

export {
    createTag,
};