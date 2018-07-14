import { query, queryOne } from "app/lib/mysql"
import dateTime from 'date-time'

const insertAdminAccount = async (password, email, userName) => {
  let created_at = dateTime()
  const row = { user_name: userName, password, email, created_at }
  const result = await query("INSERT INTO admin SET ?", row)
  return result.insertId
}

export {
  insertAdminAccount,
}