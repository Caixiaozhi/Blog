import _ from 'lodash'
import {
    insertArticle,
} from 'app/modules/article/create'
import {
    insertArticleTagRelationship
} from 'app/modules/article_tag_relationship/create'
import {
    createTag
} from 'app/modules/tag'

const insertArticleAndTags = async (content, author, tags, title) => {
    const articleRow = await insertArticle(content, author, title)
    const articleId = articleRow.insertId
    tags.forEach(async(tag, index) => {
        const tagId = await createTag(tag)
        const row = await insertArticleTagRelationship(articleId, tagId, index)
    })
    return [200, 'success']
}

export {
    insertArticleAndTags
}