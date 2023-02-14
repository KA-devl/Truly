const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {


const conn = await mongoose.connect(process.env.MONGO_URI);
console.log(`MongoDB Connected: ${conn.connection.host}`); 
};
module.exports = connectDB;