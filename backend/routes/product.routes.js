const express = require("express");
const multer = require("multer");

const ProductController = require("../controllers/product.controller");

const upload = multer({ dest: "images/" });
const router = express.Router();

router.get("/", ProductController.getAll);
router.post("/", upload.array("photos"), ProductController.add);

router.get("/:id", ProductController.getById);
router.delete("/:id", ProductController.remove);

module.exports = router;
