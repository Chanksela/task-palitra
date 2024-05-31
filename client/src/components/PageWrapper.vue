<template>
	<div>
		<header>
			<nav>
				<ul class="nav">
					<li>
						<RouterLink :to="{ name: 'Products' }">Home</RouterLink>
						<RouterLink :to="{ name: 'Dashboard' }">Dashboard</RouterLink>
					</li>
					<li v-if="route.name !== 'Dashboard'">
						<RouterLink :to="{ name: 'Cart' }">
							Cart<span v-if="cart.totalItems > 0">
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
	const route = useRoute();
	const cart = useCartStore();
</script>
<style scoped>
	header {
		height: 3rem;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
	}
	nav {
		width: 100%;
	}
	a {
		text-decoration: none;
		color: black;
	}
	.nav {
		display: flex;
		justify-content: space-between;
		padding: 0 2.5rem;
	}
	.nav li:first-child {
		display: flex;
		gap: 1rem;
	}
</style>
