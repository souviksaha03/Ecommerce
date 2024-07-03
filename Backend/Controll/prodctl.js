const product = require("../Schema/productSchema")




//create product 
exports.createProduct= async(req,res,next)=>{
    const Product = await product.create(req.body)
    console.log(req.body);
   res.status(201).json({
       success:true,
       Product
   })
//    const{name,description,price,rating,images,category,stock,numberOfReviews,reviews,createdAt} = req.body;
//    const Prod = new product({name,description,price,rating,images,category,stock,numberOfReviews,reviews,createdAt});
//    const ProdData= await Prod.save();
//    res.send(userData);
} 
exports.getAllProducts=(req,res)=>{
    res.status(200).json({message:"Route is working fine"})
}