var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');



//------------------------get-----------------------------------
router.get('/', async (req, res, next) => {
 const connection = await mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'day22',
   port: 3306,
 });
 try {
   const users = await connection.query('SELECT * from user');

   res.json({
     users: users[0],
   });
   await connection.end();
 } catch (error) {
   res.json({ error: err });
 }
});

//------------------------post-----------------------------------
router.post('/', async (req, res, next) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day22',
    port: 3306,
  });
  //---------------------------Try Catch-------------------------
//   try {
//     const { username, password } = req.body; // รับ post json object
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const users = await connection.execute(
//       `INSERT INTO user (username,password) VALUES ('${username}','${hashedPassword}')`
//       );

//     await connection.end();

//     res.send({ id: result[0].insertId });

//   } catch (error) {
//     res.json({ error: err });
//   }
//  });
//-----------------------------------------------------------------------------
const { username, password } = req.body; // รับ post json object
const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db

const result = await connection.execute(
  `INSERT INTO user (username,password) VALUES ('${username}','${hashedPassword}')`
); // insert ข้อมูล

// ปิด connection
await connection.end();

// ตอบกลับ client เป็น id ของ user ที่ insert
res.send({ id: result[0].insertId });
});
//-------------------------------My Cart--------------------------------------
router.get('/mycart',middleware ,async function (req, res) {
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
 



module.exports = router;