const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB=require('./config/db')

//lOAD  ENV VAR
dotenv.config({path: './config/config.env'});

// Connect to database by running method in './config/db' 
connectDB();


// Dev logging middleware
const app=express();
if(process.env.NODE_ENV==='development')
{
    app.use(morgan('dev'));
}

//  app running on deffault port or port 5000
const PORT = process.env.PORT || 5000;

server=app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV } on ${PORT}`));


// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
    });
