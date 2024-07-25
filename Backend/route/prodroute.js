const express = require("express")
const { getAllProducts,createProduct,  updateProd, delProd, getIndiProd } = require("../Controll/prodctl")
const { isAuthenticatedUser, isAdmin } = require("../middleware/Auth")
//const { isAuthenticatedUser } = require("../middleware/Auth")

const router = express.Router()

router.route("/product").get(isAuthenticatedUser  ,getAllProducts)
router.route("/product/new").post(isAuthenticatedUser,createProduct)
router.route("/product/update/:id").put(isAuthenticatedUser, isAdmin("admin")  ,updateProd)
router.route("/product/delete/:id").put(isAuthenticatedUser,delProd)
router.route("/product/getIndividualProduct/:id").get(getIndiProd)
module.exports= router