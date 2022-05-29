const mysql = require('mysql2/promise')

router.get('/form_student/:id', async (req, res, next) => {
    console.log('set variable')
    const [rows] = await pool.query('SELECT * from form_student WHERE id = ?',[req.params.id]);
    req.myJSON = rows;
    next();
   });

   module.exports = form_student;
