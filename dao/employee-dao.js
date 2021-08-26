const employeeModel = require('../models/employee-model.js');

/*************************************************
 * This function will take one parameter         *
 * in json format which contain employee data    *
 * & save the given data in employee collection  *
 * @param {*} employeeData                       *
 *************************************************/
const addEmployee = async (employeeData) => {
    await new employeeModel(employeeData).save();
    // for sql
    // insert into employees value (employeeData);
}


/*************************************************
 * This function will fetch all employees from   *
 * employee collection                           *
 *************************************************/
const getEmployeesList = async () => {
    let employees = await employeeModel.find(); // to fetch all data against each employee
    
    //for sql
    // select * from employees 

    // to fetch specific fields against each employee from employee collection
    employees = await employeeModel.find({}, {
        employee_id: 1,
        firstName: 1,
        lastName: 1,
        designation: 1,
        department: 1,
        salary: 1,
    });
    
    //for sql
    // select employee_id,firstName,lastName,designation,department,salary from employees 
    return employees;
}

module.exports = {
    addEmployee,
    getEmployeesList
}