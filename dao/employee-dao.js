const employeeModel = require('../models/employee-model.js');

/*************************************************
 * This function will take one parameter         *
 * in json format which contain employee data    *
 * & save the given data in employee collection  *
 * @param {*} employeeData                       *
 *************************************************/
const addEmployee = async (employeeData) => {
    await new employeeModel(employeeData).save();
}


/*************************************************
 * This function will fetch all employees from   *
 * employee collection                           *
 *************************************************/
const getEmployeesList = async () => {
    let employees = await employeeModel.find(); // to fetch all data against each employee

    // to fetch specific fields against each employee from employee collection
    employees = await employeeModel.find({}, {
        employee_id: 1,
        firstName: 1,
        lastName: 1,
        designation: 1,
        department: 1,
        salary: 1,
    });
    return employees;
}

function checkPalindrome(number) {
    let rev = 0,
        num = number
    while (num != 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = num / 10;
        num = Math.round(num)
    }
    if (number == rev)
        return true
    return false
}

function checkArmsStrongNumber(number) {
    let num = number,
        sum = 0
    while (num != 0) {
        let rem = num % 10;
        sum = sum + (rem * rem * rem);
        num = num / 10;
        num = Math.round(num);
    }
    if (number == sum)
        return true
    return false
}

function getFactorial(num) {
    if (num <= 1)
        return 1
    else return num * getFactorial(num - 1)
}

function generateFibonacciSeries(num) {
    if (num == 0)
        return 0;
    else if (num == 1)
        return 1
    else return (generateFibonacciSeries(num - 1) + generateFibonacciSeries(num - 2))
}

function fibonacci(numberOfTerms) {
    for (let i = 0; i <= numberOfTerms; i++) {
        console.log(generateFibonacciSeries(i));
    }
}

fibonacci(4)

function checkMagicNumber(num) {
    let sum = 0;
    while (num != 0) {
        let rem = num % 10;
        sum = sum + rem;
        num = num / 10
    }
    let sum2 = 0
    while (sum != 0) {
        let rem = sum % 10;
        sum2 = sum2 + rem;
        sum = sum / 10;
    }

    if (sum2 == 1)
        return true

    return false

}


let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

for (let key in obj) {
    // console.log(key, obj[key], "obj");
}

Object.entries(obj).forEach(o => {
    // console.log(o, "hjhj");
})

Object.values(obj).forEach(o => {
    // console.log(o, "values");
})

Object.keys(obj).forEach(o => {
    // console.log(o, obj[o], "key");
})

function removeDuplicate(arr){
    let uniques = [];
    for(let i of arr){
        if(uniques.indexOf(i)===-1){
            uniques.push(i)
        }
    }
}

removeDuplicate([1,4,2,1,5,4])
module.exports = {
    addEmployee,
    getEmployeesList
}