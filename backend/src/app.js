const express = require("express");
const httpStatus = require("http-status");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));


// app.use("/v1" , route);

app.use((req, res, next) => {
    next(new Error(httpStatus.NOT_FOUND, "Not found"));
});


module.exports = app;