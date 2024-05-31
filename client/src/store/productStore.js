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
				`https://kakha-palitra-task-839808583d21.herokuapp.com/api/products?page=${this.currentPage}`
			);
			this.products = response.data.products;
			this.totalPages = response.data.totalPages;
			console.log(this.products);
			this.products.map((product) => {
				product.photo = JSON.parse(product.photo);
			});
		},
		async removeProduct(product) {
			await axios.delete(
				`https://kakha-palitra-task-839808583d21.herokuapp.com/api/products/${product.id}`
			);
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
