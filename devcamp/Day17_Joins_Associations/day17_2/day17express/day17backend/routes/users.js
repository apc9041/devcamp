var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

/* GET users listing. */
router.get('/', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // <== ระบุให้ถูกต้อง
    // password: 'root', // <== ระบุให้ถูกต้อง
    database: 'day17', // <== ระบุ database ให้ถูกต้อง
    port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
 
  // เปิด connection ไปที่ database
  connection.connect();
 
  console.log('start query at: ' + new Date().getTime());
  connection.query(
    
  
  //  `select courses.id, courses.name as courses_name , enrolls.student_id as enrolls_studentid
  //  from courses
  //  inner join enrolls on enrolls.student_id= courses.teach_by
  //  order by courses.id; `
   
   `select courses.id, courses.name as courses_name , enrolls.student_id as enrolls_studentid
    from courses
    left join enrolls on enrolls.student_id= courses.teach_by
    where enrolls.student_id is null
    order by courses.id;`
   ,
  
  
  
  (err, rows, fields) => {
    if (err) throw err;
 
    console.log('end query at: ' + new Date().getTime());
    res.json(rows);
  });
 
  // ปิด connection
  connection.end();
 });
 

module.exports = router;
