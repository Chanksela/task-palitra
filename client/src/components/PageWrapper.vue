<template>
	<div>
		<header>
			<nav>
				<ul class="nav">
					<li>
						<RouterLink :to="{ name: 'Products' }" @click="goToHome"
							>Home
						</RouterLink>
						<RouterLink :to="{ name: 'Dashboard' }">Dashboard</RouterLink>
					</li>
					<li v-if="route.name !== 'Dashboard'">
						<RouterLink :to="{ name: 'Cart' }">
							Cart<span v-if="cart.totalItems > 0" class="item-counter">
								{{ cart.totalItems }}</span
							></RouterLink
						>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<slot></slot>
		</main>
	</div>
</template>
<script setup>
	import { useRoute } from "vue-router";
	import { useCartStore } from "@/store/cartStore";
	import { useProductStore } from "@/store/productStore";

	const route = useRoute();

	const cart = useCartStore();
	const productStore = useProductStore();

	const goToHome = () => {
		productStore.resetCurrentPage();
		productStore.getProducts();
	};
</script>
<style scoped>
	header {
		height: 3rem;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
	}
	nav {
		width: 100%;
	}
	a {
		text-decoration: none;
		padding: 0.5rem 1rem;
		cursor: pointer;
		color: black;
	}
	a:hover {
		background-color: black;
		color: white;
		transition: background-color 0.5s;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		padding: 0 2.5rem;
	}
	.nav li {
		display: flex;
		gap: 1rem;
	}
	.item-counter {
		margin-left: 5px;
		padding: 0.2rem 0.5rem;
		border-radius: 50%;
		background-color: black;
		color: white;
	}
</style>
