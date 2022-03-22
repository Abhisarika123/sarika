const route = require('express').Router();
const jwt = require('../authentication.js');
const taskController = require('../controller/task-controller.js');

/********* To get data by date ***********/
route.get('/getResponseByDate', jwt.authenticate,taskController.getDataByDate );

module.exports = route;