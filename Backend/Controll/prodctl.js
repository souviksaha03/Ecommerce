const product = require("../Schema/productSchema");
const ErrorHandler = require("../Utils/ErrorHandler");
const Features = require("../Utils/feature");
const catchAsync = require("../middleware/catchAsyncError")



//create product 
exports.createProduct=  catchAsync(async(req,res,next)=>{
    const Product = await product.create(req.body)
    console.log(req.body);
   res.status(201).json({
       success:true,
       Product
   })

} )
exports.getAllProducts= catchAsync(async (req,res)=>{
    const resPerPage = 5;
  const Fea = new  Features(product.find(),req.query).search().filter().page(resPerPage)
    //const products = await product.find();
    const products = await Fea.query;
    res.status(200).json({
        success:true,
       products
    })
})
exports.updateProd= catchAsync(async (req,res)=>{
    const id=  await req.params.id;

    let  prod= await product.findById(id);
    if(!prod){
        return next(new ErrorHandler("product not found",405))
    }
  prod= await product.findByIdAndUpdate({_id:id},req.body,{new:true,
    runValidators:true,
    useFindAndModify:false
  });
    res.status(200).json({
        success:true,
       prod
    })
})
exports.delProd= catchAsync(async (req,res)=>{
    const id = req.params.id;
    let delprod= await product.findById(id);
    if(!delprod){
        return next(new ErrorHandler("product not found",405))

    }
    delprod = await product.findByIdAndDelete({_id:id})
    return res.status(300).json({
        success:true,
        delprod
    })
})
exports.getIndiProd= catchAsync(async (req,res,next)=>{
    const id = req.params.id;
    let prod= await product.findById(id);
    if(!prod){
        return next(new ErrorHandler("product not found",405))
    }
 else{
    return res.status(300).json({
        success:true,
        prod
    })
 }
})