// import pg
import  pkg  from 'pg';
const {Pool,Client} =pkg
import 'dotenv/config';

const pool = new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
});

pool.connect().then(() => {
    console.log('Connected to PostgreSQL database!');
}).catch((err) => {
    console.error('Error connecting to the database:', err);
});



export default pool;