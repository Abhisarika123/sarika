const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employee_id: {
        type: Number,
        required: true,
        maxlength: 5,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
        maxlength: 30
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 30
    },
    date_of_birth: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
        maxlength: 40
    },
    department: {
        type: String,
        required: true,
        maxlength: 40
    },
    salary: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('employees', employeeSchema);