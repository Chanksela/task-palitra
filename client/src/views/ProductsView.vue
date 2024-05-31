<template>
	<ul class="products-wrapper">
		<li v-for="product in products" class="product-card">
			<RouterLink :to="{ name: 'Product', params: { id: product.id } }">
				<img
					:src="'http://localhost:3000/' + product.photo"
					alt="product image"
				/>
				<p>{{ product.name }}</p>
				<p>{{ product.price }}</p>
			</RouterLink>
		</li>
	</ul>
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
	a {
		text-decoration: none;
		color: black;
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
