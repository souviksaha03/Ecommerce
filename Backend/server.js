const app = require("./app")
const  dotenv = require("dotenv")
const connectDb = require("./configuration/db")
const { connect } = require("http2")
// Handling uncaught Excetion
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the uncaught exception`);
    process.exit(1)
})
dotenv.config({path:"backend/configuration/config.env"})

connectDb()
const server =app.listen(process.env.PORT,()=>{
    console.log(`server is working on port no ${process.env.PORT}`);
})


//unhandled promise rejection

process.on("unhandledRejection",err=>{
    console.log(`Errpr: ${err.message}`);
    console.log("shutting down the server due to unhandled promise rejection");
        server.close(()=>{
            process.exit(1);
        })
})
