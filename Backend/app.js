const express = require("express")
const app= express();

app.use(express.json())
const productroute= require("../Backend/route/prodroute")
app.use("/api/v1", productroute)

module.exports=app;