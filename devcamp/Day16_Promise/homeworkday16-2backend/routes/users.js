var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const connection = await mysql.createConnection({

      host: 'localhost',
      user: 'root', 
      database: 'homeworkday16', 
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


module.exports = router;
