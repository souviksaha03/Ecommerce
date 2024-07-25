const express = require("express")
const app= express();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/Error")
app.use(express.json())
app.use(cookieParser())
const productroute= require("../Backend/route/prodroute")
const userroute= require("../Backend/route/userroute")
app.use("/api/v1", productroute)
app.use("/api/v1",userroute)
//middleware for Errors
app.use(errorMiddleware)
module.exports=app;