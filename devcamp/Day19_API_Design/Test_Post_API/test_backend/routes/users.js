var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var port = 3001;
var cors = require('cors');
var bodyParser = require("body-parser");

// ------------------------get--------------------------------------------------------------
/* GET users listing. */
router.get('/users', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day19',
    port: 3306,
  });

  connection.connect();

  // console.log('start query : ' + new Date().getTime());

  connection.query(

    `select * from test_post1`,

    (err, rows, fileLoaderlds) => {
      if (err) throw err;

      // console.log('end query : ' + new Date().getTime());
      res.json(rows);
    });

  connection.end();
});



// ------------------------Post employee--------------------------------------------------------------

router.post('/users/add', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day19',
    port: 3306,
  });

  connection.connect();

  // console.log('start query : ' + new Date().getTime());

  connection.query(

    `insert into test_post1 
    (id_card ,firstname, lastname, email, phone, address, subdistrict, district, province, postcode) 
    values (
      ${req.body.id_card},
      '${req.body.firstname}', 
      '${req.body.lastname}', 
      '${req.body.email}', 
      '${req.body.phone}', 
      '${req.body.address}',
      '${req.body.subdistrict}',
      '${req.body.district}', 
      '${req.body.province}', 
      '${req.body.postcode}')`,


    (err, rows, fileLoaderlds) => {
      if (err) throw err;

      // console.log('end query : ' + new Date().getTime());
      res.json({ new_employee: rows });
    });

  connection.end();
});


// ------------------------Post company--------------------------------------------------------------

router.post('/users/company', (req, res) => {
 
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day19',
    port: 3306,
  });
  connection.connect();
  connection.query(
    `insert into companydata (id_number, company_name, company_address, work_experience, position ) 
    values (
       ${req.body.id_number}, 
      '${req.body.company_name}', 
      '${req.body.company_address}', 
      '${req.body.work_experience}',
      '${req.body.position}' )`,
    
      (err, result, field) => {
      console.log(err);
      res.json({
        new_company: result
      });
    }
  );
  connection.end();
});



module.exports = router;



