var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');
var bcrypt = require( 'bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');


//----------------------------------------------get data---------------------------------------------

const pool  = mysql.createPool({
   connectionLimit : 10,
   host            : 'localhost',
   user            : 'root',
   database         :  'finalexam', 
   port: 3306, 
});

router.get('/user/:id', async function (req, res, next) {
  const [rows, fields] = await pool.query('SELECT * FROM user WHERE id = ?', [req.params.id]);
  res.status(200).json(rows[0]);
});


//----------------------------------------------Post register---------------------------------------------
router.post('/', async function (req, res) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'finalexam', 
    port: 3306, 
  });
 
  const { username, password,firstname,lastname,email,mobile_phone} = req.body; 
  const hashedPassword = await bcrypt.hash(password, 10); 
 
  const result = await connection.query(
 `INSERT INTO user (username, password, firstname, lastname, email, mobile_phone) VALUES (?,?,?,?,?,?)`, 
 [req.body.username, req.body.password, req.body.firstname, req.body.lastname, req.body.email, req.body.mobile_phone]
  ); // insert ข้อมูล
 
  // ปิด connection
  await connection.end();
 

  res.send({ id: result[0].insertId });
 });
 

//----------------------------------------------get mycart--------------------------------------------
 router.get('/mycart', async function (req, res) {
  let token = req.headers.authorization;
  if (!token) {
    res.status(401).send('Unauthorized');
  } else {
    try {
      // remove 'Bearer' prefix to validate pure token value
      const decoded = jwt.verify(
        token.replace('Bearer', '').trim(),
        'codecamp_very_$secr3T!'
      );
      console.log(decoded);
      // query user-specific information with decoded as a JSON object
       
      res.send([
        { item: 'Product A selected' },
        { item: 'Product B selected' },
      ]);
    } catch (e) {
      res.status(401).send('Unauthorized');
    }
  }
 });
 
//  `INSERT INTO user (username, password, firstname, lastname, email, mobile_phone) 
//  VALUES (?,?,?,?,?,?)`, [username,hashedPassword,firstname,lastname,email,mobile_phone]

// `INSERT INTO user (username,password,firstname,lastname,email,mobile_phone) VALUES 
// ('${username}','${hashedPassword}','${firstname}','${lastname}','${email}','${mobile_phone}')`

module.exports = router;
