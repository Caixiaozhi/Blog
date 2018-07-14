import { query, queryOne } from 'app/lib/mysql'
import dateTime from 'date-time'

const insertThoughts = async (content, cover) => {
  let time = dateTime()
  const row = { cover, content, created_at: time, updated_at: time}
  const rows = await query("INSERT INTO thoughts SET ?", row)
  return rows.insertId;
}

export {
  insertThoughts,
}