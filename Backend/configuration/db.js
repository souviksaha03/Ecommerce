const mongoose = require("mongoose")


const connect =()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,UseUnifiedTopology:true,useCreateIndex:true}).then((data)=>{
        console.log(`mongodb connected with server data: ${data.connection.host}`)
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports= connect