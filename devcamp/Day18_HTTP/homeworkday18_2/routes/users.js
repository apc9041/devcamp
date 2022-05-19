// homeworkday18_2 ---------------------------------------------------------------
const { fileLoader } = require('ejs');
var express = require('express');
var router = express.Router();
var mysql = require('mysql2');


// get => select -----------------------------------------------------------------
/* GET users listing. */
router.get('/api/product/:id', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day18',
    port: 3306,
  });

  connection.connect();

  console.log('start query : ' + new Date().getTime());

  connection.query(

    `select * from stock`,

    (err, rows, fileLoaderlds) => {
      if (err) throw err;

      console.log('end query : ' + new Date().getTime());
      res.json(rows);
    });

  connection.end();
});

// post => insert into -----------------------------------------------------------------

router.post('/api/product', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day18',
    port: 3306,
  });

  connection.connect();

  console.log('start query : ' + new Date().getTime());

  connection.query(

    ` insert into stock (id, product_name, stock_left, category) values
     (1,'sunsil',5,'shampoo'),
     (2,'farza',2,'shampoo'),
     (3,'lux',10,'soap'),
     (4,'dali',2,'toothpaste'),
     (5,'colgate',6,'toothpaste');`,

    (err, rows, fileLoaderlds) => {
      if (err) throw err;

      console.log('end query : ' + new Date().getTime());
      res.json({ ID: rows.insertId, new_product : rows });
    });

  connection.end();
});



// put => update -----------------------------------------------------------------------

router.put('/api/product/:id', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day18',
    port: 3306,
  });

  connection.connect();

  console.log('start query : ' + new Date().getTime());

  connection.query(

    `UPDATE stock
    SET product_name = 'rejoice', stock_left = '3', category = 'conditioner'
    WHERE id=1; `,

    (err, rows, fileLoaderlds) => {
      if (err) throw err;

      console.log('end query : ' + new Date().getTime());
      res.json(rows);
    });

  connection.end();
});


// delete => delete --------------------------------------------------------------------

router.delete('/api/product/:id', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day18',
    port: 3306,
  });

  connection.connect();

  console.log('start query : ' + new Date().getTime());

  connection.query(

    `DELETE FROM stock WHERE id = 4 ; `,

    (err, rows, fileLoaderlds) => {
      if (err) throw err;

      console.log('end query : ' + new Date().getTime());
      res.json(rows);
    });

  connection.end();
});




module.exports = router;
