import { query, queryOne } from "app/lib/mysql";
import dateTime from 'date-time';

const insertTag = async (tag) => {
    let time = dateTime();
    // let is_deleted = 0;
    let row = {tag: tag, created_at: time}
    let rows = await query("INSERT INTO tag SET ?", row);
    return [200, rows];
}

export {
    insertTag,
}
