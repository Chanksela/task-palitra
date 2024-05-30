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
		removeFromCart(item) {
			if (item.quantity === 1) {
				this.cart.splice(this.cart.indexOf(item), 1);
			}
			item.quantity--;
		},
		clearCart() {
			this.cart = [];
		},
	},
	getters: {
		totalItems() {
			return this.cart.length;
		},
		totalPrice() {
			return this.cart.reduce(
				(acc, item) => acc + item.price * item.quantity,
				0
			);
		},
	},
});
