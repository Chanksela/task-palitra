<template>
	<div>
		<h1>Product Details Page</h1>
		<p>ID: {{ $route.params.id }}</p>
		<div>{{ product }}</div>
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
					// Check if response contains data
					this.product = response.data;
					console.log(this.product);
				} else {
					// Handle scenario where product doesn't exist
					this.$router.push({ name: "NotFound" });
				}
				this.product = response.data;
			} catch (error) {
				console.error(error);
			}
		},
	};
</script>
