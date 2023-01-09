const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'testdb1',
    user: 'root',
    password: '2046'
});

connection.connect((error) =>{
    if(error){
        throw error;
    }
    else{
        console.log('success')
    }
});

module.exports = connection;