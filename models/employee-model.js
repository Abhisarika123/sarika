const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employee_id: {
        type: Number
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    date_of_birth: {
        type: String
    },
    designation: {
        type: String
    },
    department: {
        type: String
    },
    salary: {
        type: Number
    }
})

module.exports = mongoose.model('employees', employeeSchema);