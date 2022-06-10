// homeworkday18_1 ---------------------------------------------------------------
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
  
  // const {id} = req.body
  connection.query(

    `select * from homework18_1 where ${req.params.id}`,

    (err, rows, fileLoaderlds) => {
      if (err) throw err;

      console.log('end query : ' + new Date().getTime());
      res.json(rows);
    });

  connection.end();
});

// post => insert into -----------------------------------------------------------------

router.post('/user', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day18',
    port: 3306,
  });

  connection.connect();

  console.log('start query : ' + new Date().getTime());

  connection.query(

    ` insert into homework18_1 (id, product_name, stock_left, category) values
     (1,'sunsil',5,'shampoo'),
     (2,'farza',2,'shampoo'),
     (3,'lux',10,'soap'),
     (4,'dali',2,'toothpaste'),
     (5,'colgate',6,'toothpaste');`,

    (err, rows, fileLoaderlds) => {
      if (err) throw err;

      console.log('end query : ' + new Date().getTime());
      res.json(rows);
    });

  connection.end();
});



// put => update -----------------------------------------------------------------------

router.put('/user', function (req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'day18',
    port: 3306,
  });

  connection.connect();

  console.log('start query : ' + new Date().getTime());

  connection.query(

    `UPDATE homework18_1
    SET product_name = 'rejoice'
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

    `DELETE FROM homework18_1 WHERE id = 4 ; `,

    (err, rows, fileLoaderlds) => {
      if (err) throw err;

      console.log('end query : ' + new Date().getTime());
      res.json(rows);
    });

  connection.end();
});




module.exports = router;
