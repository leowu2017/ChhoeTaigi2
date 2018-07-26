import pg from 'pg';

const pool = new pg.Pool({
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: '1234qwer',
    database: 'dictionary'
});

export default pool;
