<template>
	<div>
		<header>
			<nav>
				<ul class="nav">
					<li>
						<RouterLink :to="{ name: 'Products' }">Home</RouterLink>
					</li>
					<li>
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
	import { useCartStore } from "@/store/cartStore";
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
</style>
