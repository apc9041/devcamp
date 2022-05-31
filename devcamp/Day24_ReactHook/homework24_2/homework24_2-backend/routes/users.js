var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');
// const pool = require('mysql2/typings/mysql/lib/Pool');
var bcrypt = require('bcrypt');
var cors = require('cors');

//-----------------------------------------------connection pool------------------------------------------
const pool = mysql.createPool({
  connectionLimit : 10,
  host : 'localhost',
  user : 'root',
  database : 'day22',
  port : 3306,
});

//------------------------------------------------get user table------------------------------------------
/* GET users listing. */
router.get('/get', async function (req, res, next) {
  const [rows, fields] = await pool.query('SELECT * FROM user');
  res.status(400).json(rows);
  res.send(rows);
});

//----------------------------------------------username password-----------------------------------------
router.post('/', async function (req, res) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day22',
    port: 3306,
  })
  const { username, password } = req.body; //รับ post json object จาก front end
  const hashedPassword = await bcrypt.hash(password, 10); // เอา password ที่ส่งมาเข้ารหัสก่อนด้วย bcrypt ก่อนเอาเข้า database
  // console.log(hashedPassword);
  const result = await connection.execute (
    `insert into user (username, password) values ('${username}','${hashedPassword}')`
  ); //เอาข้อมูลลง database

  await connection.end(); //ปิด connection

  res.send({ id: result[0].ImsertId});
});


module.exports = router;
