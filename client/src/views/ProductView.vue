<template>
	<div class="product-wrapper">
		<div class="product-image">
			<img
				src="https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I"
				alt="product image"
			/>
		</div>
		<div class="product-details">
			<div class="product-info">
				<h1 id="name">Name: {{ product.name }}</h1>
				<br />
				<p id="price">Price: {{ product.price }}$</p>
			</div>
			<div class="product-actions">
				<a href="">Add to Cart</a>
				<a href="">Go to checkout</a>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		data() {
			return {
				product: {},
			};
		},
		async created() {
			try {
				const response = await axios.get(
					`http://localhost:3000/api/products/${this.$route.params.id}`
				);
				if (response.data) {
					this.product = response.data;
					console.log(this.product);
				} else {
					this.$router.push({ name: "NotFound" });
				}
				this.product = response.data;
			} catch (error) {
				console.error(error);
			}
		},
	};
</script>
<style scoped>
	#name {
		font-size: 2.5rem;
	}
	#price {
		font-size: 1.2rem;
	}
	img {
		width: 100%;
	}
	.product-wrapper {
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
