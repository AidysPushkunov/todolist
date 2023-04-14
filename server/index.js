const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
// parse application/json
app.use(bodyParser.json());

// create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'zaq12@WSX',
  database: 'to_do_list_bichi',
});

// connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log('Mysql connected...');
});

// add new user
app.get('/get-data', (req, res) => {
  let sql = 'SELECT * from tasks';
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: 200,
        error: null,
        response: results,
      }),
    );
  });
});

app.post('/post-data', (req, res) => {
  let taskName = req.body.value;
  let sql = 'INSERT INTO `tasks` (`name`) VALUES (?)';
  let query = conn.query(sql, [taskName], (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: 200,
        error: null,
      }),
    );
  });
});

app.post('/delete-data', (req, res) => {
  let taskid = req.body.id;
  let sql = 'DELETE from `tasks` WHERE id=?';
  let query = conn.query(sql, [taskid], (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: 200,
        error: null,
      }),
    );
  });
});

app.listen(3001, () => {
  console.log('Server running successfuly on 3000');
});
