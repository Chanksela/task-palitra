const express = require("express");
const productsController = require("../controllers/products.controller");
const router = express.Router();

router.get("/", productsController.getProducts);
router.post("/", productsController.addProduct);

router.get("/:id", productsController.getProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
