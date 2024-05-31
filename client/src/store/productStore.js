import { defineStore } from "pinia";
import { useCartStore } from "./cartStore";
import axios from "axios";

export const useProductStore = defineStore("product", {
	state: () => ({
		products: [],
		totalPages: Number,
		currentPage: 1,
	}),
	actions: {
		async getProducts() {
			const response = await axios.get(
				`http://localhost:3000/api/products?page=${this.currentPage}`
			);
			this.products = response.data.products;
			this.totalPages = response.data.totalPages;
			this.products.map((product) => {
				product.photo = JSON.parse(product.photo);
			});
		},
		async removeProduct(product) {
			await axios.delete(`http://localhost:3000/api/products/${product.id}`);
			await this.getProducts();
			useCartStore().clearItem(product);
		},
		async prevPage() {
			if (this.currentPage >= this.totalPages) {
				this.currentPage > 1 && this.currentPage--;
				await this.getProducts();
			}
		},
		async nextPage() {
			if (this.currentPage < this.totalPages) {
				this.currentPage++;
				await this.getProducts();
			}
		},
		resetCurrentPage() {
			this.currentPage = 1;
		},
	},
});
