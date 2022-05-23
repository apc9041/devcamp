var express = require('express');
var router = express.Router();
var mysql  = require('mysql2');


// ------------------------get--------------------------------------------------------------
/* GET users listing. */
router.get('/', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day19',
    port: 3306,
  });

  connection.connect();

  console.log('start query : ' + new Date().getTime());

  connection.query(

    `select * from employeedata`,

    (err, rows, fileLoaderlds) => {
      if (err) throw err;

      console.log('end query : ' + new Date().getTime());
      res.json(rows);
    });

  connection.end();
});



// ------------------------Post--------------------------------------------------------------

router.post('/', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day19',
    port: 3306,
  });

  connection.connect();

  console.log('start query : ' + new Date().getTime());

  connection.query(

    `insert into employeedata (firstname, lastname, phone_number, email, employee_address, sub_district, district, province, postcode, id_card_numbrer) 
    values ('${req.body.firstname}' , '${req.body.lastname}', ${req.body.phone_number}, '${req.body.email}', '${req.body.employee_address}', '${req.body.sub_district}', '${req.body.district}', '${req.body.province}', ${req.body.postcode}, ${req.body.id_card_numbrer})`,

    (err, rows, fileLoaderlds) => {
      if (err) throw err;

      console.log('end query : ' + new Date().getTime());
      res.json({ new_employee: rows });
    });

  connection.end();
});

module.exports = router;
