const express = require("express");
const app = express();
const port = 3000;
const Product = require("./models/product.model");

app.use(express.json());

app.get("/api/products", async (req, res) => {
	try {
		const products = await Product.getAll();
		res.json(products);
	} catch (error) {
		console.log(error);
	}
});

app.get("/api/products/:id", async (req, res) => {
	const product = await Product.getById(req.params.id);
	res.json(product);
});

app.post("/api/products", async (req, res) => {
	await Product.add(req.body);
	res.json("Product Added");
});

app.delete("/api/products/:id", async (req, res) => {
	await Product.remove(req.params.id);
	res.json("Product deleted");
});

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
