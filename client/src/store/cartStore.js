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
			this.updateLocalStorage();
		},
		removeFromCart(item) {
			if (item.quantity === 1) {
				this.cart.splice(this.cart.indexOf(item), 1);
			}
			item.quantity--;
			this.updateLocalStorage();
		},
		clearItem(item) {
			this.cart = this.cart.filter((product) => product.id !== item.id);
			this.updateLocalStorage();
		},
		clearCart() {
			this.cart = [];
			this.updateLocalStorage();
		},
		readLocalStorage() {
			this.cart = JSON.parse(localStorage.getItem("cart")) || [];
		},
		updateLocalStorage() {
			localStorage.setItem("cart", JSON.stringify(this.cart));
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
