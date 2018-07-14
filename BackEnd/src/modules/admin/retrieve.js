import { query } from 'app/lib/mysql'

const getRowById = async (id) => {
  const sql = 'SELECT * FROM admin WHERE id = ?'
  const result = await query(sql, [id])
  return result
}

const getIdByPwdAndEml = async (password, email) => {
  const sql = 'SELECT id FROM `admin` WHERE `password` = ? AND `email` = ?'
  const result = await query(sql, [password, email])
  return result
}

export {
  getRowById,
  getIdByPwdAndEml,
}