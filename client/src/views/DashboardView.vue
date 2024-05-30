<template>
	<div>
		<h1>Dashboard Page</h1>
		<form @submit.prevent="addProduct">
			<div>
				<label for="name">Name</label>
				<br />
				<input type="text" id="name" name="name" v-model="productName" />
			</div>
			<div>
				<label for="price">Price</label>
				<br />
				<input
					type="text"
					id="price"
					name="price"
					v-model="productPrice"
					pattern="[0-9]+(\.[0-9]+)?"
				/>
			</div>
			<div>
				<label for="photo">Photo</label>
				<br />
				<input type="text" id="photo" name="photo" v-model="productPhoto" />
			</div>
			<button>Add Product</button>
		</form>
	</div>
</template>

<script setup>
	import axios from "axios";
	import { ref } from "vue";

	const productName = ref("");
	const productPrice = ref("");
	const productPhoto = ref("");

	const addProduct = () => {
		const data = {
			name: productName.value,
			price: productPrice.value,
			photo: productPhoto.value,
		};

		axios
			.post("http://localhost:3000/api/products", data)
			.then((response) => {
				productName.value = "";
				productPrice.value = "";
				productPhoto.value = "";
			})
			.catch((error) => {
				console.error(error);
			});
	};
</script>
