const route = require('express').Router();
const jwt = require('../authentication.js');
const employeeController = require('../controller/employee-controller.js');

/********** To save employee data ********/
route.post("/addEmployee", jwt.authenticate,employeeController.addEmployee);

/********* To fetch all employees ********/
route.get('/getEmployeesList', jwt.authenticate,employeeController.getEmployeesList)




module.exports = route