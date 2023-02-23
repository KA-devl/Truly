const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');

//lOAD  ENV VAR
dotenv.config({ path: './config/.env' });
// Dev logging middleware
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json()).use(cors());

//  app running on deffault port or port 5000
const PORT = process.env.PORT || 5000;

// Connect to database by running method in './config/db'
connectDB();

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

//This is the main route in the backend, hence why we have /. There is no "data" to get from this endpoint
app.get('/', (req, res) => {
  res.send('HELLO, THIS IS THE SOEN341 REST API');
});

//Routes : To have a clean code, i have refactored all the "routes" a.k.a endpoints so everything is well structured and separated in different files.
require('./routes/user/createUser')(app);
require('./routes/user/getUser')(app);
require('./routes/user/updateUserProfile')(app);
require('./routes/employer/createJob')(app);
require('./routes/employer/getJob')(app);
require('./routes/employer/getJobs')(app);
require('./routes/employer/deleteJob')(app);
require('./routes/employer/updateJob')(app);
require('./routes/employer/getApplication')(app);
require('./routes/user/login')(app);
require('./routes/candidate/createApplication')(app);
require('./routes/candidate/getAllJobs')(app);
require('./routes/candidate/getJobAppliedFor')(app);
require('./routes/admin/deleteUser')(app);
require('./routes/admin/getUsers')(app);

server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`)
);
