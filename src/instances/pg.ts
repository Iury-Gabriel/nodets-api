import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
const { Pool } = require('pg');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL ,
})

export const sequelize = new Sequelize(
    process.env.PG_DB as string,
    process.env.PG_USER as string,
    process.env.PG_PASSWORD as string,
    {
        port: parseInt(process.env.PG_PORT as string),
        dialect: 'postgres',
    }
)