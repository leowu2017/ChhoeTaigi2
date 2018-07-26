const csvUrl = 'https://raw.githubusercontent.com/ChhoeTaigi/ChhoeTaigiDatabase/master/ChhoeTaigiDatabase/20180630-194713/ChhoeTaigi_EmbreeTaigiSuTian.csv';
import request from 'request';
import csv from 'csvtojson';

import pool from './connectDB.js';
import { getEmbreeTaigiSuTianString } from './queryString.js';

// 1. EmbreeTaigiSuTian
export function parseEmbreeTaigiSuTian() {
	var jsonArray = [];
	return csv().fromStream(request.get(csvUrl)).subscribe((json) => {
		jsonArray.push(json);
	}, (err) => {
		console.log(err);
	}, () => {

		const queryString = getEmbreeTaigiSuTianString(jsonArray);
		pool.query(queryString, (err, res) => {
			if (err){
				console.log(err);
			}
		});
		pool.end();

		console.log("complete");
	});
}





