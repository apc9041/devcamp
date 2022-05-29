// const myModule = require('./my_module');
// console.log(myModule);
// console.log(myModule.myProperty);
//--------------------------------------------------------------------
// const express = require('express');
// const app = express();
// const pool  = require('./config/database');

// const myModule = require('./my_module') (pool);

// app.get('/', async function (req, res, next) {
//     console.log( await myModule.getCoursesId(1) );
//     console.log( await myModule.getStudentId(2) );
//     res.send('Hello World');
//     next();
// });

//--------------------------------------------------------------------
// const express = require('express');
// const app = express();

// app.use(async (req, res, next) => {
//     console.log(req.path + ' : 1');
//     next();
//  })
//  app.use(async (req, res, next) => {
//     console.log('2');
//     next();
//  })
//  app.use(async (req, res, next) => {
//     console.log('3');
//     next();
//  })

// app.get('/hello', (req, res) => {
//   res.send('Hello World!');
// })

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })
//-----------------------------------------------------------------------

const express = require('express');
const app = express();

app.use(async (req, res, next) => {
    console.log(req.path + ' : 1');
    next();
 })
 app.use(async (req, res, next) => {
    console.log('2');
    // res.send( 'Hi Robert 2');
    next();
 })
 app.use(async (req, res, next) => {
    console.log('3');
    // res.send( 'Hi Robert 3');
    next();
 })

app.get('/hello', (req, res) => {
  res.send('Hello World!');
})

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

module.exports = app;
// app.listen(3000);