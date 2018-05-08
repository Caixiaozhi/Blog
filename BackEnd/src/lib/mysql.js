import mysql from 'mysql2/promise';
import { mysqlConfig } from "config";

const pool = mysql.createPool(mysqlConfig);

const query = async (sql, params) => {
    let connection = null;
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.query(sql, params);
        return rows;
    } catch (error) {
        console.error(sql);
        console.error(error);
    } finally {
        if(connection) {
            connection.release();
        }
    }
    return 'error';
};

const queryOne = async (sql, params) => {
    let connection = null;
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.query(sql, params);
        return rows[0];
    } catch (error) {
        console.error(sql);
        console.error(error);
    } finally {
        if (connection) {
            connection.release();
        }
    }
    return 'error';
};

const commit = async (connection) => {
    console.log()
}