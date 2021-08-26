const route = require('express').Router();
const employeeDao = require('../dao/employee-dao.js');

/********** To save employee data ********/
route.post("/addEmployee", async (req, res) => {
    try {
        await employeeDao.addEmployee(req.body);
        res.send();
    } catch (error) {
        console.log(error);
    }
});


/********* To fetch all employees ********/
route.get('/getEmployeesList', async (req, res) => {
    try {
        let employeesList = await employeeDao.getEmployeesList();
        res.send(employeesList);
    } catch (error) {
        console.log(error);
    }
})

module.exports = route