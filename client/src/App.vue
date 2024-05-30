<template>
	<div>
		<header>
			<nav>
				<ul>
					<li>Home</li>
					<li>Cart</li>
				</ul>
			</nav>
		</header>
		<main>
			<div>
				<ul>
					<li v-for="product in products">
						{{ product }}
					</li>
				</ul>
			</div>
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
<style scoped></style>
