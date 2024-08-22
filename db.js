const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'toy_db_reserve'
});

connection.connect((err) => {
	if(err) {
		console.log('Fail');
		return;
	}

	console.log('success');
});