import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
	state: () => ({
		cart: [],
	}),
	actions: {
		addToCart(item) {
			if (!this.cart.includes(item)) {
				this.cart.push(item);
				item.quantity = 1;
			} else {
				item.quantity++;
			}
		},
		clearCart() {
			this.cart = [];
		},
	},
	getters: {
		totalItems() {
			return this.cart.length;
		},
	},
});
