// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// let cors = require ("cors");

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



// Example1----------------------------------------------------------------------
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/api/users', (req, res) => {
//    res.status(400).send('Bad Request');
// });

// app.listen(port, () => {
//    console.log(`Listening at http://localhost:${port}`);
// });



// Example2----------------------------------------------------------------------
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post('/api/users', (req, res) => {
//    let name = req.body.name;
//    console.log(name);
//    if(name == undefined){
//        res.status(404).send('Not Found');
//    }else{
//        res.status(200).send('OK.');
//    }
  
// });

// app.listen(port, () => {
//    console.log(`Listening at http://localhost:${port}`);
// });


// Example3----------------------------------------------------------------------
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// let users = require('./user.json');

// app.post('/user', function(req, res, next) {
//    return res.status(200).json({
//        code: 1,
//        message: 'OK',
//        data: users
//    })
// });

// app.listen(port, () => {
//    console.log(`Listening at http://localhost:${port}`);
// });


// Test Example3----------------------------------------------------------------------
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// //require JSON file
// let users = require('./users.json');


// app.get('/user', function(req, res, next) {
//  return res.status(200).json({
//     code: 1,
//     message: 'OK',
//     data: users
//     })
// });

// app.listen(port, () => {
//  console.log(`Listening at http://localhost:${port}`) } )


// Example4----------------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = require('./user.json');

app.post('/user', function (req, res, next) {
 let user = {}
 user.id = users.length + 1
 user.name = req.body.name;
 user.age = Number(req.body.age);
 user.movie = req.body.movie;
 users.push(user);
 console.log('Users :', user.name, 'Created!')
 return res.status(201).json({
   code: 1,
   message: 'OK',
   data: users
 });
});

app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}`);
});



// Example5----------------------------------------------------------------------
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// let users = require('./user.json');

// app.put('/user/:id', function (req, res, next) {
//  const replaceId = req.params.id;
//  const position = users.findIndex(function (val) {
//    return val.id == replaceId;
//  });
//  console.log(users[position]);
//  try {
//    users[position].name = req.body.name;
//    users[position].age = Number(req.body.age);
//    users[position].movie = req.body.movie;
//    return res.status(200).json({
//      code: 1,
//      message: 'OK',
//      data: users
//    });
//  } catch (error) {
//    res.status(404).send('Not Found');
//  }
//  });

// app.listen(port, () => {
//    console.log(`Listening at http://localhost:${port}`);
// });





module.exports = app;
