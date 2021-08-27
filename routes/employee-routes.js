const route = require('express').Router();
const employeeDao = require('../dao/employee-dao.js');

/********** To save employee data ********/
route.post("/addEmployee", async (req, res) => {
    try {
        await employeeDao.addEmployee(req.body);
        return res.status(200).json({
            message: 'Employee Added Successfully'
        });
    } catch (error) {
        console.log(error);
    }
});


/********* To fetch all employees ********/
route.get('/getEmployeesList', async (req, res) => {
    try {
        let employeesList = await employeeDao.getEmployeesList();
        return res.status(200).json(employeesList);
    } catch (error) {
        console.log(error);
    }
})

module.exports = route