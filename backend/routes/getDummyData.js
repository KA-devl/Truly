const mockData = require ('../mock/mock-data');
//module.exports means that this file is exposed to all the app and can be used/ imported from anywhere.

module.exports = (app) =>{
  //Here i'm just declaring a "get" endpoint, where the front-end will be able to get the dummy data. Obviously we could have declared this in the app.js, but think about it : would that be a good idea in a real-world app to have 100 endpoints in the main file?
  app.get('/dummy-data', (req,res)=>{
    const message = `The dummy data have been retrieved successfully`;
    res.json({message, mockData})
  })
  
}