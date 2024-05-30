import { createWebHistory, createRouter } from "vue-router";

import ProductsView from "../views/ProductsView.vue";
import CartView from "../views/CartView.vue";
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
		path: "/cart",
		name: "Cart",
		component: CartView,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "404",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
