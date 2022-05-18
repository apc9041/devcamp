var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// router.get('/', function (req, res, next) {
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // <== ระบุให้ถูกต้อง
//     // password: 'root', // <== ระบุให้ถูกต้อง
//     database: 'homeworkday16', // <== ระบุ database ให้ถูกต้อง
//     port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
//   });

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const connection = await mysql.createConnection({

      host: 'localhost',
      user: 'root', 
      //  password: 'root', // <== ระบุใหถูกตอง
      database: 'homeworkday16', // <== ระบุ database ใหถูกตอง
      port: 3306, 

   });


  try {

    const data = await connection.query('SELECT * from data');
 
     res.json({
       data: data[0],
       
    });
 
    await connection.end();
 
    } catch (error) {
           res.json({ error: error });
       }
   });
 
//   // เปิด connection ไปที่ database
//   connection.connect();
 
//   console.log('start query at: ' + new Date().getTime());
//   connection.query('SELECT * from data', (err, rows, fields) => {
//     if (err) throw err;
 
//     console.log('end query at: ' + new Date().getTime());
//     res.json(rows);
//   });
 
//   // ปิด connection
//   connection.end();
//  });
 




module.exports = router;
