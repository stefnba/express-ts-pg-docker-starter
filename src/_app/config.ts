import dotenv from 'dotenv';
dotenv.config();

export default {
    database: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        user: process.env.DB_ADMIN_USER,
        password: process.env.DB_APP_PASSWORD,
        max: 30
    }
};
