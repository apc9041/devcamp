const mysql = require('mysql2/promise')

router.get('/form_user/:id', async (req, res, next) => {
    console.log('set variable')
    const [rows] = await pool.query('SELECT * from form_user WHERE id = ?',[req.params.id]);
    req.myJSON = rows;
    next();
   });

   module.exports = form_user;