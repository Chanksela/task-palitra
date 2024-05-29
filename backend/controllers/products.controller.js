const Product = require("../models/product.model");

const getProducts = async (req, res) => {
	try {
		const products = await Product.getAll();
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const getProduct = async (req, res) => {
	const product = await Product.getById(req.params.id);
	res.json(product);
};
const addProduct = async (req, res) => {
	await Product.add(req.body);
	res.json("Product Added");
};
const deleteProduct = async (req, res) => {
	await Product.remove(req.params.id);
	res.json("Product deleted");
};
module.exports = { getProducts, getProduct, addProduct, deleteProduct };
