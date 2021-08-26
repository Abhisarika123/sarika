let mongoose = require("mongoose");

const dbUri = 'mongodb://localhost:27017/demo';
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    poolSize: 20
}).then(() => {
    console.log('DB connection established to demo');
}).catch(error => {
    console.error('Could not establish mongoose connection');
})