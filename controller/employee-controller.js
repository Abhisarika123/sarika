const employeeDao = require('../dao/employee-dao.js');
const { EMPLOYEE_ADDED } = require('../constant.js')

const addEmployee =  async (req, res) => {
    try {
        await employeeDao.addEmployee(req.body);
        return res.status(200).json({
            message: EMPLOYEE_ADDED
        });
    } catch (error) {
        console.log(error);
    }
}

const getEmployeesList = async (req, res) => {
    try {
        let employeesList = await employeeDao.getEmployeesList();
        return res.status(200).json(employeesList);
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    addEmployee,
    getEmployeesList
}