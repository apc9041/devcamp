var express = require('express');
var router = express.Router();

const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//------------------------------------------------post table------------------------------------------
router.post('/token', async function (req, res) {
    const { username, password } = req.body; // รับ post json object

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root', 
      database: 'codecamp', 
      port: 3306,
    });
   
    const result = await connection.query(
      `SELECT * FROM login WHERE username='${username}'`
    );
    await connection.end();
   
    if (result[0].length > 0) {
        const passwordMatch = await bcrypt.compare(password, result[0][0].password);
        if (passwordMatch) {
        const privateKey = 'codecamp_very_$secr3T!';
        const token = jwt.sign(
            {
                id: result[0][0].id,
                first_name: result[0][0].first_name,
                last_name: result[0][0].last_name,
                email: result[0][0].email,
                username: result[0][0].username,
            },
            privateKey,
            { expiresIn: '300000ms' }
            );
        res.json({ token: token, username : result[0][0].username });

        } else {
          res.status(401).send({ error: 'invalid credential' });
          return;
        }
      } else {
        res.status(401).send({ error: 'user not found' });
        return;
      }
   
});

module.exports = router;
