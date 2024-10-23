const express = require("express");
const connect = require("./config/config.js");
const router = require("./routes/user.route.js");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use("/api", router);
connect();
app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});