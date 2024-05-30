const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const productRoutes = require("./routes/product.routes");
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

app.use(productRoutes);

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
