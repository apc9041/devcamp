const express = require('express');
const app = express();
var router = express.Router();
const mysql = require('mysql2/promise');
const pool = require('./config/database.js'); 
const form_user = require('./models/form_user');
const form_student = require('./models/form_student');



//-----------------------------------------------database----------------------------------------
// const pool = mysql.createPool({
//   connectionLimit : 10,
//   host : 'localhost',
//   user : 'root',
//   database : 'codecamp'
// });


//-------------------------------------------------user------------------------------------------
// router.get('/form_user/:id', async (req, res, next) => {
//   console.log('set variable')
//   const [rows] = await pool.query('SELECT * from form_user WHERE id = ?',[req.params.id]);
//   req.myJSON = rows;
//   next();
//  });

 //------------------------------------------------student---------------------------------------
//  router.get('/form_student/:id', async (req, res, next) => {
//   console.log('set variable')
//   const [rows] = await pool.query('SELECT * from form_student WHERE id = ?',[req.params.id]);
//   req.myJSON = rows;
//   next();
//  });


//-------------------------------------------------middleware---------------------------------------


app.use(async function (req, res, next) {
  req.userId = 1;
  next();
}) // Go to next Middleware

app.use('/', form_user) ;
app.use('/', form_student) ;


app.use(async function (req, res, next) {

      const myDate = new Date();
      
        const additionJSON = {

        data: req.myJSON,

        additionalData: {
          userId: req.userId,
          dateTime:  myDate.getFullYear() + '-' + ("0" + myDate.getMonth()).slice(-2)  + '-' + ("0" + myDate.getDate()).slice(-2) + ' ' + ("0" + myDate.getHours()).slice(-2) + ':' + ("0" + myDate.getMinutes()).slice(-2) + ':' + ("0" + myDate.getSeconds()).slice(-2) ,
        } ,
      }

  res.json(additionJSON);
}); // Stop and send Forbidden


const port = 3000;
app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
})


module.exports = app;
