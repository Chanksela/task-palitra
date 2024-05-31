<template>
	<div>
		<ul class="products-wrapper">
			<li v-for="product in productStore.products" class="product-card">
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
		<div class="pagination">
			<button @click="prevPage"><</button>
			<button @click="nextPage">></button>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from "vue-router";
	import { useProductStore } from "@/store/productStore";

	const router = useRouter();

	const productStore = useProductStore();

	const prevPage = async () => {
		await productStore.prevPage();
		router.push({
			path: "/products",
			query: { page: productStore.currentPage.toString() },
		});
	};
	const nextPage = async () => {
		await productStore.nextPage();
		router.push({
			path: "/products",
			query: { page: productStore.currentPage.toString() },
		});
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
		gap: 1rem;
	}
	.products-wrapper li {
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.2);
	}
	.products-wrapper li:hover {
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
		scale: 1.01;
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
	.pagination {
		margin-top: 2rem;
		display: flex;
		gap: 4rem;
		justify-content: center;
	}
	.pagination button {
		border: 1px solid rgba(0, 0, 0, 0.8);
		padding: 1rem;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-color: transparent;
		display: flex;
		justify-content: center;
		cursor: pointer;
		transition: background-color 0.3s, color 0.3s;
		font-weight: bold;
	}
	.pagination button:hover {
		background-color: black;
		color: white;
	}
</style>
