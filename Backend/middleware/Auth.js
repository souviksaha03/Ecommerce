const ErrorHandler = require("../Utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncError")
const User = require("../Schema/UserSchema")
const jwt = require("jsonwebtoken")
exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;
   //console.log(token);

 if(!token){
    return next(new ErrorHandler("please access to login this resourse",401))
 }
 const decodedData = jwt.verify(token, process.env.JWT_SECRET);
 req.user = await User.findById(decodedData.id)
 next()
});
exports.isAdmin=(...roles)=>{
   return(req,res,next)=>{
      if(!roles.includes(req.user.role)){
         return next(
         new ErrorHandler(` Role ${req.user.role} is not allowed`,403))
      }
      next() 
   }
 ;
}

