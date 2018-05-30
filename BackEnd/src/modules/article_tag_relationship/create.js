import { query, queryOne } from "app/lib/mysql";
import dateTime from 'date-time';

const insertArticleTagRelationship = async (articleId, tagId, tagOrder) => {
    const insertRow = {
        article_id: articleId,
        tag_id: tagId,
        tag_order: tagOrder,
        created_at: dateTime(),
    }
    const rows = await query('INSERT INTO article_tag_relationship SET ?', insertRow)
    return rows
}

export {
    insertArticleTagRelationship,
}