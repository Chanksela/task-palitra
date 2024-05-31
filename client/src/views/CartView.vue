<template>
	<div>
		<h1>Cart Page</h1>
		<div v-if="cartStore.cart.length > 0">
			<ul>
				<li v-for="product in cartStore.cart">
					<div>
						<div>
							<img
								width="80px"
								src="https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I"
								alt="product image"
							/>
						</div>
						<div>{{ product.name }}</div>
						<div>{{ product.price }}</div>
						<div>Quantity: {{ product.quantity }}</div>
					</div>
					<div class="actions">
						<p @click="cartStore.add(product)">+</p>
						<p @click="cartStore.removeFromCart(product)">-</p>
						<p @click="cartStore.clearItem(product)">X</p>
					</div>
				</li>
			</ul>
			<br />
			<div>Total: {{ cartStore.totalPrice }}</div>
			<button @click="cartStore.clearCart">Clear Cart</button>
		</div>
		<div v-else>
			<div>
				No items added to the cart.
				<RouterLink :to="{ name: 'Products' }">See our products.</RouterLink>
				Maybe you'll like something.
			</div>
		</div>
	</div>
</template>
<script setup>
	import { useCartStore } from "@/store/cartStore";

	const cartStore = useCartStore();
</script>
<style scoped>
	li {
		display: flex;
		justify-items: center;
		align-items: center;
		gap: 2rem;
	}
	.actions {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	p {
		width: 20px;
		height: 20px;
		border: 1px solid black;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	p:hover {
		background-color: black;
		color: white;
		transition: background-color 0.3s;
	}
</style>
