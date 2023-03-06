import {  createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'shadow',
    password: '1234',
    database: 'tasksdb'
})