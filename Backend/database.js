import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const PASSWORD_DB = process.env.PASSWORD;
const pool = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: PASSWORD_DB,
    database: 'db'
});


try {
    await pool.connect();
    console.log('Connected to MySQL database');
} catch (error) {
    console.error('Error connecting to MySQL database:', error);
}

export default pool;