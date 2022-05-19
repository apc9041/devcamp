var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

/* GET users listing. */
router.get('/user', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // <== ระบุให้ถูกต้อง
    // password: 'root', // <== ระบุให้ถูกต้อง
    database: 'day18', // <== ระบุ database ให้ถูกต้อง
    port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
 
  // เปิด connection ไปที่ database
  connection.connect();
 
  console.log('start query at: ' + new Date().getTime());
  
  connection.query(
    
    `SELECT * from homework18_1`,

  //  ` insert into homework18_1 (id, product_name, stock_left, category) values
  //    (1,'sunsil',5,'shampoo'),
  //    (2,'farza',2,'shampoo'),
  //    (3,'lux',10,'soap'),
  //    (4,'dali',2,'toothpaste'),
  //    (5,'colgate',6,'toothpaste');`,
    
  //  `select c.id, c.name as course_name, i.name as instructor_name
  //  from courses as c 
  //  left join instructors as i on i.id = c.teach_by
  //  order by c.id;  `,
  
  
  
  (err, rows, fields) => {
    if (err) throw err;
 
    console.log('end query at: ' + new Date().getTime());
    res.json(rows);
  });
 
  // ปิด connection
  connection.end();
 });
 

module.exports = router;



