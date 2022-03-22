//using express
const express = require("express");
const app = express();
const port = 3000;
// require('./db-config.js');
const employeeRoutes = require('./routes/employee-routes.js');
const taskRoutes = require('./routes/task-route.js');
// var cron = require('node-cron');

// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
// });

// const redis = require("redis");
// const client = redis.createClient();

// client.on("error", function(error) {
//   console.error(error);
// });

// client.set("key", "value", redis.print);
// client.get("key", redis.print);

app.use(express.static("public"))
.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*"); // allow request from all origin
  response.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  response.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization, refreshToken"
  );

  next();
})
.use('/employee', employeeRoutes)
.use('/task', taskRoutes);
app.listen(port,()=>{
    console.log(`server running... on port: ${port}`);
})


// function a(x,y,z){
// z();
// console.log("x: ",x,'y: ',y);
// }
// a('x','y',function(){
//   setTimeout(function(){
//     console.log("timer");
//   },5000)
//   console.log("callback");
// });