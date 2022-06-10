var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
var cors = require('cors');
const jwt = require('jsonwebtoken');


//------------------------------------------------connection pool------------------------------------------
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  database        : 'codecamp',
  port            : 3306,
});


//----------------------------------get-------------------------------------------------------
router.get('/', async function (req, res, next) {
  const [rows, fields] = await pool.query('SELECT * FROM login');
  res.status(200).json(rows);
  res.send(rows)
});

 //------------------------------------------------post user table------------------------------------------
 router.post('/', async function (req, res) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'codecamp', 
    port: 3306, 
  });
 
  const { username, password } = req.body; // รับ post json object
  const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db
 
  const result = await connection.execute(
    `INSERT INTO login (username,password) VALUES ('${username}','${hashedPassword}')`
  ); // insert ข้อมูล
 
  // ปิด connection
  await connection.end();
 
  // ตอบกลับ client เป็น id ของ user ที่ insert
  res.send({ id: result[0].insertId });
 });
 
 


module.exports = router;
