import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
	state: () => ({
		cart: [],
	}),
	actions: {
		add(item) {
			const existingItem = this.cart.find(
				(cartItem) => cartItem.id === item.id
			);
			if (!existingItem) {
				this.cart.push(item);
				item.quantity = 1;
			} else {
				existingItem.quantity++;
			}
		},
		removeFromCart(item) {
			if (item.quantity === 1) {
				this.cart.splice(this.cart.indexOf(item), 1);
			}
			item.quantity--;
		},
		clearItem(item) {
			this.cart = this.cart.filter((product) => product.id !== item.id);
			// console.log("cart array", this.cart, "cart item", item);
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
