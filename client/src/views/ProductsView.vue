<template>
	<ul class="products-wrapper">
		<li v-for="product in products" class="product-card">
			<RouterLink :to="{ name: 'Product', params: { id: product.id } }">
				<div>
					<img
						:src="'http://localhost:3000/' + product.photo[0]"
						alt="product image"
					/>
				</div>
				<div>
					<p>Name: {{ product.name }}</p>
					<p>Price: {{ product.price }}</p>
				</div>
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
					this.products.map(
						(product) => (product.photo = JSON.parse(product.photo))
					);
					console.log("here", this.products);
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

	.product-card a {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.product-card a > div:nth-child(2) {
		align-self: flex-start;
	}

	.product-card img {
		width: 15rem;
	}
</style>
