<template>
	<div>
		<div v-if="cartStore.cart.length > 0" class="main-wrapper">
			<ul class="left">
				<li v-for="product in cartStore.cart" class="product-wrapper">
					<div class="product-cart">
						<div>
							<img
								width="80px"
								:src="`https://kakha-palitra-task-839808583d21.herokuapp.com/${product.photo[0]}`"
								alt="product image"
							/>
						</div>
						<div class="product-name">{{ product.name }}</div>
						<div class="product-price">{{ product.price }} $</div>
						<div class="product-qty">Quantity: {{ product.quantity }}</div>
					</div>
				</li>
			</ul>
			<div class="right">
				<div>Total Price: {{ cartStore.totalPrice }} $</div>
				<div>Total Amount: {{ cartStore.totalItems }}</div>

				<div class="cart-action">
					<a>Buy Products</a>
				</div>
			</div>
		</div>
		<div v-else>
			<div>Nothing to see here</div>
		</div>
	</div>
</template>
<script setup>
	import { useCartStore } from "@/store/cartStore";
	import "../../assets/styles/common-cart.css";

	const cartStore = useCartStore();
</script>
