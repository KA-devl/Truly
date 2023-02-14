const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");


// Dev logging middleware
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app
.use(bodyParser.json())

//  app running on deffault port or port 5000
const PORT = process.env.PORT || 5000;



//lOAD  ENV VAR
dotenv.config({ path: "./config/config.env" });

// Connect to database by running method in './config/db'
connectDB();


// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

//This is the main route in the backend, hence why we have /. There is no "data" to get from this endpoint
app.get("/", (req, res) => {
  res.send(
    "HELLO, THIS IS THE SOEN341 REST API. Go to the route /dummy-data to acess the dummy data (Benjamin) - test1 "
  );
});

//Routes : To have a clean code, i have refactored all the "routes" a.k.a endpoints so everything is well structured and separated in different files.
require("./routes/getDummyData")(app);
require("./routes/user/createUser")(app);
require("./routes/user/updateUserProfile")(app);


server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`)
);