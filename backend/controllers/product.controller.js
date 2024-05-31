const ProductModel = require("../models/product.model");

const getAll = async (req, res) => {
	try {
		const page = parseInt(req.query.page) || 1;
		const pageSize = 10;

		const products = await ProductModel.getAll();

		const startIndex = (page - 1) * pageSize;
		const endIndex = page * pageSize;

		const paginatedProducts = products.slice(startIndex, endIndex);
		const totalPages = Math.ceil(products.length / pageSize);
		if (totalPages >= page) {
			res.json({ products: paginatedProducts, totalPages });
		} else {
			res.json({ products, totalPages });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getById = async (req, res) => {
	try {
		const product = await ProductModel.getById(req.params.id);
		res.json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const add = async (req, res) => {
	try {
		const photos = req.files.map((file) => file.path);
		const photosJson = JSON.stringify(photos);

		await ProductModel.add(req.body, photosJson);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const remove = async (req, res) => {
	try {
		await ProductModel.remove(req.params.id);
		res.json("Product deleted");
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = { getAll, getById, add, remove };
