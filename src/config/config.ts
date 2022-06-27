import { config, } from 'dotenv';
config();

export default {
    app: {
        DATABASE_URL: process.env.DATABASE_URL,
        DB_USER:process.env.DB_USER,
        DB_PASS: process.env.DB_PASS,
        DB_NAME: process.env.DB_NAME,
        DB_HOST: process.env.DB_HOST,
        DB_DIALECT: process.env.DB_DIALECT,
    }
}