const express = require("express");
const cors = require("cors");

const ProductRouter = require("./routes/product.routes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/images", express.static("images"));
app.use("/api/products", ProductRouter);

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
