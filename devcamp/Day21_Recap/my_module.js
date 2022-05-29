// module.exports = {
//     myProperty: 1,
//     myFunction: function() { console.log('myFunc');}
// }

module.exports = function (pool) {
    return {
        async getCoursesId(id){
            let [rows, fields] = await pool.query('SELECT * FROM courses WHERE id = ' + id);
            return rows[0];
        },
        async getStudentId(id){
            let [rows, fields] = await pool.query('SELECT * FROM students WHERE id = ' + id);
            return rows[0];
        }
    }
 }
