const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT;

const DB_url = process.env.DB_URL;
mongoose
.connect(DB_url)
.then(()=>{console.log("its connected to MongoDb Atlas")})
.catch((err)=>{console.log(err)});

app.listen(PORT,()=>{
    console.log("connected to port",PORT)
})