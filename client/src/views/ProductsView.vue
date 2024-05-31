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
		<div>
			<div @click="prevPage">Prev</div>
			<div @click="nextPage">Next</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from "vue";
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

	onMounted(() => {
		productStore.getProducts();
	});
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
