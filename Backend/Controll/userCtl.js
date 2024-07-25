const ErrorHandler = require("../Utils/ErrorHandler");
const catchAsync = require("../middleware/catchAsyncError")
const User = require("../Schema/UserSchema");
const sendToken = require("../Utils/jwtToken");
const catchAsyncError = require("../middleware/catchAsyncError");

//registration
exports.createUser =catchAsync( async(req,res,next)=>{
  const{name,email,password}= req.body;
  const user=await User.create({
    name,email,password,profilepic:{
        public_id:"sample id",
        URL:"temp"
    }
  })
    sendToken(user,201,res)
})
//Login user

exports.LoginUser = catchAsync(
    async(req,res,next)=>{
        const {email, password}= req.body;
        //check if user has given mail and password both
        if(!email || !password){
            return next(new ErrorHandler("email and password is not correct",400))
        }
        const user =await User.findOne({email}).select("+password")
        if(!user){
            return next(new ErrorHandler("Invalid user or password",401))
        }
        const  isPasswordMatched =await user.comparePassword(password);
        if(!isPasswordMatched){
            return next(new ErrorHandler("Invalid user or password",401))
        }
sendToken(user,200,res)
    }
)

//Logout

exports.logout = catchAsyncError(async (req,res,next)=>{
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:"Logged out",
    })
})