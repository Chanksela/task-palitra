<template>
	<div>
		<header>
			<nav>
				<ul class="nav">
					<li>Home</li>
					<li>Cart</li>
				</ul>
			</nav>
		</header>
		<main>
			<ul class="products-wrapper">
				<li v-for="product in products" class="product-card">
					<img
						src="https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I"
						alt="product image"
					/>
					<p>{{ product.name }}</p>
					<p>{{ product.price }}</p>
				</li>
			</ul>
		</main>
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		name: "App",
		data() {
			return {
				products: [],
			};
		},
		created() {
			try {
				axios.get("http://localhost:3000/api/products").then((response) => {
					this.products = response.data;
				});
			} catch (error) {
				console.log(error);
			}
		},
	};
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
	.nav {
		display: flex;
		justify-content: space-between;
		padding: 0 2.5rem;
	}
	.products-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
	}
	.products-wrapper li {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.product-card {
	}
	.product-card img {
		width: 15rem;
	}
</style>
