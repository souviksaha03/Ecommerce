const app = require("./app")
const  dotenv = require("dotenv")
const connectDb = require("./configuration/db")
const { connect } = require("http2")
dotenv.config({path:"backend/configuration/config.env"})

connectDb()
app.listen(process.env.PORT,()=>{
    console.log(`server is working on port no ${process.env.PORT}`);
})
