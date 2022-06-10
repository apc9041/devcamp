var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
var cors = require('cors');
const jwt = require('jsonwebtoken');



//----------------------------------connection pool-----------------------------------------
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  database        : 'day22',
  port            : 3306,
});


//----------------------------------get-------------------------------------------------------
router.get('/', async function (req, res, next) {
  const [rows, fields] = await pool.query('SELECT * FROM user');
  res.status(200).json(rows);
  res.send(rows)
});





//----------------------------------username password-----------------------------------------
router.post('/', async function (req, res) {
  
  const connection = await mysql.createConnection ({
   host: 'localhost' ,
   user: 'root', 
   database: 'day22', 
   port: 3306, 
   });

  const { username, password, firstname, lastname, email } = req.body; // รับ post json object
  const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db
  
  console.log(hashedPassword)
  const result = await connection.execute(
    `INSERT INTO user (username, password, firstname, lastname, email) VALUES (
      '${username}',
      '${hashedPassword}',
      '${firstname}',
      '${lastname}',
      '${email}')`
   ); // insert ข้อมูล

    // ปิด connection
    await connection.end();

    // ตอบกลับ client เป็น id ของ user ที่ insert
    res.send({ id: result[0].insertId });
  });
  

//----------------------------------jwt-------------------------------------------------------------
  router.get('/mycart' , async function (req, res) {
    let token = req.headers.authorization;
    if (!token) {
      res.status(401).send('Unauthorized1');
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
        res.status(401).send('Unauthorized2');
      }
    }
   });
   



module.exports = router;