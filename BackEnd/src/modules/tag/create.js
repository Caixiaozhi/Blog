import { query, queryOne } from "app/lib/mysql";
import dateTime from 'date-time';

const insertTag = async (tag) => {
    let time = dateTime();
    const row = { tag: tag, created_at: time }
    const rows = await query("INSERT INTO tag SET ?", row);
    return rows.insertId;
}

export {
    insertTag,
}
