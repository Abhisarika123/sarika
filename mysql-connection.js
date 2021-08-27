// const route = require('express').Router();
// const mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'demo'
// });

// connection.connect((error) => {
//     if (error)
//         console.log(error);
//     else
//         console.log('DB connection established');
// })

// route.get('/listEmployee', (req, resp) => {
//     let employeesList = connection.query('select * from employees', (error, rows, fields) => {
//         if (error)
//             console.log(error);
//         else
//             return rows
//     });
//     return resp.status(200).json(employeesList)
// })

// route.post('/addEmployee', (req, resp) => {
//     let employeeData = {
//         ...req.body
//     }
//     let inserQuery = 'insert into `employees` (`emloyee_id`,`firstName`,`lastName`,`date_of_birth`,`designation`,`department`,`salary`) values(?,?,?,?,?,?,?)';
//     let query = connection.format(inserQuery, [employeeData]);
//     let statusData = connection.query(query, (error, res) => {
//         if (error) {
//             console.log(error);
//             return {
//                 status: 201,
//                 message: 'Error In Query'
//             }
//         } else {
//             console.log('Added employee', res.employee_id);
//             return {
//                 status: 200,
//                 message: 'Employee Added Successfully!'
//             }
//         }
//     });
//     return resp.status(statusData.status).json({
//         message: statusData.message
//     })
// })