//using express
const express = require("express");
const app = express();
const port = 3000;
require('./db-config.js');
const employeeRoutes = require('./routes/employee-routes.js')

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
.use('/employee',employeeRoutes);
app.listen(port,()=>{
    console.log(`server running... on port: ${port}`);
})