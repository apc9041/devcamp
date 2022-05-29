var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

// (POST) /api/auth/token
router.post('/token', async function (req, res) {
    const { username,firstname, lastname, email , password } = req.body; // รับ post json object

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root', // <== ระบุให้ถูกต้อง
      database: 'day22', // <== ระบุ database ให้ถูกต้อง
      port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889),
    });
   
    const result = await connection.query(
      `SELECT * FROM user WHERE username='${username}'`
    );
    // ปิด connection
    await connection.end();
   
    // พบ record
    if (result[0].length > 0) {
      const passwordMatch = await bcrypt.compare(password, result[0][0].password);
      if (passwordMatch) {
// JWT implementation here
     const privateKey = 'codecamp_very_$secr3T!';
     const token = jwt.sign(
       {
         id: result[0][0].id,
         username: result[0][0].username,
         firstname: result[0][0].firstname,
         lastname: result[0][0].lastname,
         email: result[0][0].email,
       },
       privateKey,
       { expiresIn: '3000ms' }
     );
     res.json({ token: token });
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