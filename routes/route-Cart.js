const express = require('express');
const router = express.Router();
//const{validarJWT}=require('../middlewares/validar-token')
const{getProducts,getProductsCart, addProductCart,putProduct,deleteProduct}=require('../Controllers/IndexC')



router.get("/products", getProducts);
router.get("/products-cart", getProductsCart);

/* POST */
router.post("/products-cart", addProductCart);

/* PUT */
router.put("/products-cart/:productId", putProduct);

/* DELETE */
router.delete("/products-cart/:productId", deleteProduct);
module.exports = router;