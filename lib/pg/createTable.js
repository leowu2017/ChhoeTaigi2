import pool from './connectDB.js';

// 1. EmbreeTaigiSuTian
import { createEmbreeTaigiSuTianString } from './queryString.js';

console.log(createEmbreeTaigiSuTianString);
pool.query(createEmbreeTaigiSuTianString, (err, res) => {
	console.log(err, res);
	pool.end();
});