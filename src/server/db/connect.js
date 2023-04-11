const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'to_do_list_bichi',
  password: 'zaq12@WSX',
});

connection.connect((err) => {
  if (err) {
    return console.error('Error: ' + err.message);
  } else {
    console.log('Data base connection was success!');
  }
});

module.exports = connection;
