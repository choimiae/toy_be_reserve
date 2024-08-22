
const express = require('express');
const connection = require('./db.js');

const app = express();

app.get('/', (req, res) => {
	connection.query('SELECT * FROM reserve_list', (err, results, field) => {
		if(err) {
			console.error('Fail', err);
			res.status(500).send('server error');
			return;
		}

		res.json(results);
	});
});

const port = 3001;
app.listen(port, () => {
	console.log('sever start');
});