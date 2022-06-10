var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'ls-e4732e412a61f59f6fa72b8da25d254a7c4ecbc1.ctkcjkxeem4c.ap-southeast-1.rds.amazonaws.com',
  user: 'dbmasrteruser',
  password: 'ws081081',
  database: 'dbmaster',
  port: 3306,
});


router.get('/', async function (req, res, next) {

  const [rows, fields] = await pool.query('SELECT * FROM carcommerce');
  console.log(rows)
  if (rows.length > 0) {
    console.log(rows)
    res.status(200).send(rows);
  }
  else {
    res.status(400).send();
  }
});

// await connection.end();

//----------------------------------Input--------------------------------------------------------
router.post('/', async function (req, res) {

  const connection = await mysql.createConnection({
    host: 'ls-e4732e412a61f59f6fa72b8da25d254a7c4ecbc1.ctkcjkxeem4c.ap-southeast-1.rds.amazonaws.com',
    user: 'dbmasrteruser',
    password: 'ws081081',
    database: 'dbmaster',
    port: 3306,
  });

  const { ProductName, Photo, StockLeft, Category } = req.body; // รับ post json object
  // const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db

  console.log(req.body);
  console.log(req.files);
  const result = await connection.execute(
    `INSERT INTO carcommerce (ProductName, Photo, StockLeft, Category) VALUES (
      '${ProductName}',
      '${Photo}',
      ${StockLeft},
      '${Category}')`
  ); // insert ข้อมูล

  // ปิด connection
  await connection.end();

  // ตอบกลับ client เป็น id ของ user ที่ insert
  res.send({ id: result[0].insertId });
});

//--------------------------------------------------------Upload-----------------------------------

router.post("/upload", (req, res) => {
  // console.log(req.files.Photo);
  const newpath = __dirname + "/../public/upload-files/";
  const file = req.files.Photo;
  const filename = file.name;

  console.log(`${newpath}${filename}`);

  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    res.status(200).send({ message: "File Uploaded", code: 200 , filename });
  });
});
//-------------------------------------edit-------------------------------------------
router.put('/edit/:id', async function (req, res) {

  const connection = await mysql.createConnection({
    host: 'ls-e4732e412a61f59f6fa72b8da25d254a7c4ecbc1.ctkcjkxeem4c.ap-southeast-1.rds.amazonaws.com',
    user: 'dbmasrteruser',
    password: 'ws081081',
    database: 'dbmaster',
    port: 3306,
  });

  const { ProductName, Photo, StockLeft, Category } = req.body; // รับ post json object
  // const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db

  console.log(ProductName)
  const result = await connection.execute(
    `update carcommerce 
      set ProductName = '${ProductName}', 
      Photo = '${Photo}', 
      StockLeft = ${StockLeft}, 
      Category = '${Category}'
      where id = ${req.params.id};`

  ); // Update ข้อมูล

  // ปิด connection
  await connection.end();

  // ตอบกลับ client เป็น id ของ user ที่ insert
  res.send({ id: result[0].insertId });
});

//-------------------------------------delete-------------------------------------------
router.delete('/delete/:id', async function (req, res) {

  const connection = await mysql.createConnection({
    host: 'ls-e4732e412a61f59f6fa72b8da25d254a7c4ecbc1.ctkcjkxeem4c.ap-southeast-1.rds.amazonaws.com',
    user: 'dbmasrteruser',
    password: 'ws081081',
    database: 'dbmaster',
    port: 3306,
  });

  const { ProductName, Photo, StockLeft, Category } = req.body; // รับ post json object
  // const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db

  console.log(ProductName)
  const result = await connection.execute(
    `delete from carcommerce
    where id = ${req.params.id};`

  ); // Delete ข้อมูล

  // ปิด connection
  await connection.end();

  // ตอบกลับ client เป็น id ของ user ที่ insert
  res.send({ id: result[0].insertId });
});

//----------------------------------Register username password-----------------------------------------
router.post('/register', async function (req, res) {
  
  const connection = await mysql.createConnection ({
    host: 'ls-e4732e412a61f59f6fa72b8da25d254a7c4ecbc1.ctkcjkxeem4c.ap-southeast-1.rds.amazonaws.com',
    user: 'dbmasrteruser',
    password: 'ws081081',
    database: 'dbmaster',
    port: 3306,
   });

  const { username, password, firstname, lastname, email } = req.body; // รับ post json object
  const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db
  
  console.log(hashedPassword)
  const result = await connection.execute(
    `INSERT INTO user (username, password, firstname, lastname, email) VALUES (
      '${username}',
      '${hashedPassword}',
      '${firstname}',
      '${lastname}',
      '${email}')`
   ); // insert ข้อมูล

    // ปิด connection
    await connection.end();

    // ตอบกลับ client เป็น id ของ user ที่ insert
    res.send({ id: result[0].insertId });
  });
  

//----------------------------------jwt-------------------------------------------------------------
  router.get('/mycart' , async function (req, res) {
    let token = req.headers.authorization;
    if (!token) {
      res.status(401).send('Unauthorized1');
    } else {
      try {
        // remove 'Bearer' prefix to validate pure token value
        const decoded = jwt.verify(
          token.replace('Bearer', '').trim(),
          'codecamp_very_$secr3T!'
        );
        console.log(decoded);
        // query user-specific information with decoded as a JSON object
   
        res.send([
          { item: 'Product A selected' },
          { item: 'Product B selected' },
        ]);
      } catch (e) {
        res.status(401).send('Unauthorized2');
      }
    }
   });


module.exports = router;
