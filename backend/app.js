//Simple configuration of a node js server (and with using expressJS)
const express = require ('express');
const app = express();
const port = 3000;

//This is the main route in the backend, hence why we have /. There is no "data" to get from this endpoint
app.get('/', (req, res) => {
  res.send('HELLO, THIS IS THE SOEN341 REST API. Go to the route /dummy-data to acess the dummy data (Benjamin) - test ')
})




//Routes : To have a clean code, i have refactored all the "routes" a.k.a endpoints so everything is well structured and separated in different files.
require("./routes/getDummyData")(app);



//This is an important line to make the server work on port 3000. It could be changed to any other number but it is suggested to stay in port 3000.
app.listen(port, () => {
  console.log(`Currently listening on port ${port}`)
})