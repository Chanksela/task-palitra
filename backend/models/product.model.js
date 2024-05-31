const db = require("../database");

class ProductModel {
	static async getAll() {
		return db.getAll("SELECT * FROM products");
	}
	static async getById(id) {
		return db.getById(`SELECT * FROM products WHERE id = ${id}`);
	}
	static async add(body, photo) {
		const { name, price } = body;

		return db.add(
			`INSERT INTO products (name, price, photo) VALUES ('${name}', ${price}, '${photo}')`
		);
	}
	static async remove(id) {
		return db.remove(`DELETE FROM products WHERE id = ${id}`);
	}
}

module.exports = ProductModel;
