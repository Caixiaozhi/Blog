import { query, queryOne } from "app/lib/mysql";
import dateTime from 'date-time';

const insertArticle = async (content, author, title) => {
    let created_at = dateTime();
    const row = {content, author, title, created_at, updated_at: created_at}
    const rows = await query("INSERT INTO article SET ?", row);
    return rows
}

export {
    insertArticle,
}
