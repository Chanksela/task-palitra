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
	if (req.params.id === "favicon.ico") {
		return res.status(204).end();
	}
	const product = await Product.getById(req.params.id);
	res.json(product);
};
const addProduct = async (req, res) => {
	const { name, price } = req.body;
	const photo = req.file;

	await Product.add(req.body, photo.path);
	res.json("Product Added");
};
const deleteProduct = async (req, res) => {
	await Product.remove(req.params.id);
	res.json("Product deleted");
};
module.exports = { getProducts, getProduct, addProduct, deleteProduct };
