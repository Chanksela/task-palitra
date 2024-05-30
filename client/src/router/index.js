import { createWebHistory, createRouter } from "vue-router";

import ProductsView from "../views/ProductsView.vue";
import ProductView from "../views/ProductView.vue";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
	{
		path: "/",
		redirect: "/products",
	},
	{
		path: "/products",
		name: "Products",
		component: ProductsView,
	},
	{
		path: "/products/:id",
		name: "Product",
		component: ProductView,
	},
	{
		path: "/cart",
		name: "Cart",
		component: CartView,
	},
	{
		path: "/checkout",
		name: "Checkout",
		component: CheckoutView,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
