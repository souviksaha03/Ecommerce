const mongoose= require("mongoose")
const imageSchema = require("./imageSchema")
const { type } = require("express/lib/response")
const validator = require("validator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required:[true,"please enter your name"],
        minLength: [3,"name should not be less than 3 letters"]

    },
    email:{
        type:String,
        required:[true,"please enter your mail id"],
        unique:true,
        validate:[validator.isEmail,"please enter a valid email"],

    },
    password:{
        type:String,
        required:[true,"enter a strong password for your profile"],
        minLength: [8,"password should not be less than 8 characters"],
        select:false
    },
    profilepic:{ 
        public_id: {
        type: String,
        required: [true, 'The public id to distinguish image.']
      },
      URL: {
        type: String,
        required: [true, 'Need url to fetch the image.']
      }},
      role:{
        type:String,
        default:"user"
      },
      resetPasswordToken:String,
      resetPasswordExpire:Date,
})

userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10)
})
//JWT TOKEN(REGISTRATION ER POR LOGIN)
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE
    });

}  
userSchema.methods.comparePassword = async function(getPassword){
    return await bcrypt.compare(getPassword,this.password)
}
module.exports= mongoose.model("User",userSchema);