const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "images/" });
const productsController = require("../controllers/products.controller");
const router = express.Router();

router.get("/", productsController.getProducts);
router.post("/", upload.single("photo"), productsController.addProduct);

router.get("/:id", productsController.getProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
