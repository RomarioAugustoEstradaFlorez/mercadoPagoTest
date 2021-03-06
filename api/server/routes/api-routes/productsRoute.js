var express = require('express');
var router = express.Router();
var ProductsController = require('../../controllers/product/productController.js');
// console.log(ProductsController);

router.get('/', ProductsController.listProducts);
router.get('/:id', ProductsController.getProductById);
router.get('/:by', ProductsController.listProductsBy);
router.get('/categories/:id', ProductsController.getProductCategories);
router.get('/search/?query', ProductsController.searchProducts);
router.post('/', ProductsController.addProduct);
router.put('/:id', ProductsController.editProduct);
router.delete('/:id', ProductsController.deleteProduct);

module.exports = router;
