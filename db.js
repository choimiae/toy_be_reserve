const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'database-1.cre6qq2ayux9.ap-northeast-2.rds.amazonaws.com',
	user: 'admin',
	password: 'admin1234',
	database: 'toy_reserve'
});

connection.connect((err) => {
	if(err) {
		console.log('Fail');
		return;
	}

	console.log('success');
});