import PostgresClient from 'postgresql-node';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_NAME, DB_APP_USER, DB_APP_PASSWORD, DB_PORT } = process.env;

console.log(DB_HOST, DB_NAME);

const db = new PostgresClient({
    host: DB_HOST,
    port: Number(DB_PORT),
    database: String(DB_NAME),
    user: String(DB_APP_USER),
    password: String(DB_APP_PASSWORD)
});

export default db;
