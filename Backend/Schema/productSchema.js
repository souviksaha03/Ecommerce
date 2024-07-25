const mongoose = require("mongoose");
const imageSchema = require("./imageSchema");
const reviewSchema = require("./reviewSchema");

const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"please enter product desc"]
    },
    price:{
        type:Number,
        required:[true,"please enter product price"],
        maxLength:[8,"price cannot exceede eight characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[imageSchema],
    category:{
        type:String,
        required:[true,"Please enter category"]
    },
    stock:{
        type:Number,
        required:[true,"Please enter product stock"],
        maxLength:[4,"max length cannot exceede beyond 4 "],
        default:1
    },
    numberOfReviews:{
        type:Number,
        default:0
    },
    reviews:
        [reviewSchema]
    ,
    createdAt:{
            type: Date,
            default:Date.now
    }
})


module.exports= mongoose.model("product", productSchema)
