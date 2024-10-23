const mongoose = require("mongoose");
require('dotenv').config()


const connectDB = async () => {
        try {
        const conn = await mongoose.connect(process.env.MOONGO_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch (err){
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);
    }
};
module.exports = connectDB;