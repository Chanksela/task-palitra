<template>
	<div>
		<div v-if="cartStore.cart.length > 0" class="main-wrapper">
			<ul class="left">
				<li v-for="product in cartStore.cart" class="product-wrapper">
					<div class="product-cart">
						<div>
							<img
								width="80px"
								:src="'http://localhost:3000/' + product.photo[0]"
								alt="product image"
							/>
						</div>
						<div class="product-name">{{ product.name }}</div>
						<div class="product-price">{{ product.price }} $</div>
						<div class="product-qty">Quantity: {{ product.quantity }}</div>
					</div>
					<div class="actions">
						<button @click="cartStore.add(product)">+</button>
						<button @click="cartStore.removeFromCart(product)">-</button>
						<button @click="cartStore.clearItem(product)">X</button>
					</div>
				</li>
			</ul>
			<div class="right">
				<div>Total Price: {{ cartStore.totalPrice }} $</div>
				<div class="cart-action">
					<a @click="cartStore.clearCart">Clear Cart</a>
				</div>
				<div class="cart-action">
					<RouterLink :to="{ name: 'Checkout' }">Go to checkout</RouterLink>
				</div>
			</div>
		</div>
		<div v-else>
			<div>
				No items added to the cart.
				<RouterLink :to="{ name: 'Products' }" class="home-link"
					>See our products.</RouterLink
				>
				Maybe you'll like something.
			</div>
		</div>
	</div>
</template>
<script setup>
	import { useCartStore } from "@/store/cartStore";
	import "../../assets/styles/common-cart.css";
	const cartStore = useCartStore();
</script>
