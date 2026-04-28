import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const config = {
    host: "1",
    password:"123456",
    user: "Pedro",
    port: "5000",
    database: ""
}
const pool = new Pool(config);