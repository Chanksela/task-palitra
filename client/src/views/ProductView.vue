<template>
	<div class="product-wrapper">
		<div class="product-image">
			<Carousel :items-to-show="1" :navigation-enabled="true">
				<Slide v-for="(photo, index) in product.photo" :key="index">
					<img :src="'http://localhost:3000/' + photo" alt="product image" />
				</Slide>
				<template #addons>
					<Navigation />
					<Pagination />
				</template>
			</Carousel>
		</div>
		<div class="product-details">
			<div class="product-info">
				<h1 id="name">Name: {{ product.name }}</h1>
				<br />
				<p id="price">Price: {{ product.price }}$</p>
			</div>
			<div class="product-actions">
				<a @click="cart.addToCart(product)">Add to Cart</a>
				<RouterLink :to="{ name: 'Checkout' }">Go to checkout</RouterLink>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from "vue";
	import { onMounted } from "vue";

	import { useRoute, useRouter } from "vue-router";
	import axios from "axios";

	import "vue3-carousel/dist/carousel.css";
	import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

	import { useCartStore } from "@/store/cartStore";

	const route = useRoute();
	const router = useRouter();

	const cart = useCartStore();

	const product = ref({});

	onMounted(async () => {
		try {
			const response = await axios.get(
				`http://localhost:3000/api/products/${route.params.id}`
			);
			if (response.data) {
				product.value = response.data;
				product.value.photo = JSON.parse(product.value.photo);
			} else {
				router.push({ name: "NotFound" });
			}
		} catch (error) {
			console.error(error);
		}

		return {
			product,
		};
	});
</script>
<style scoped>
	#name {
		font-size: 2.5rem;
	}
	#price {
		font-size: 1.2rem;
	}
	img {
		width: auto;
		height: 300px;
	}
	.product-wrapper {
		height: 60%;
		display: flex;
		gap: 1.2rem;
	}
	.product-image,
	.product-details {
		width: 50%;
	}
	.product-details {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.product-actions {
		display: flex;
		gap: 2rem;
	}
	.product-actions a {
		text-decoration: none;
		color: black;
		padding: 0.5rem 1rem;
		border: 1px solid rgb(168, 161, 161);
		border-radius: 0.5rem;
		transition: background-color 0.3s, color 0.3s;
	}
	.product-actions a:hover {
		background-color: black;
		box-shadow: 0.2rem 0.2rem 0.2rem black;
		color: white;
	}
</style>
