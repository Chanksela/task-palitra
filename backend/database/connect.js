const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "ecommerce.db");

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log("Connected to the database");
});
module.exports = db;
