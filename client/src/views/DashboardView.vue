<template>
	<div>
		<h1>Dashboard Page</h1>
		<form @submit.prevent="addProduct" enctype="multipart/form-data">
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
				<input
					type="file"
					id="photo"
					name="photo"
					v-on:change="handleFileUpload"
					multiple
				/>
			</div>
			<button>Add Product</button>
		</form>
	</div>
</template>

<script setup>
	import axios from "axios";
	import { ref } from "vue";
	import { useRouter } from "vue-router";
	const router = useRouter();

	const productName = ref("");
	const productPrice = ref("");
	const productPhoto = ref([]);

	const handleFileUpload = (event) => {
		productPhoto.value = event.target.files;
	};

	const addProduct = async () => {
		const formData = new FormData();
		formData.append("name", productName.value);
		formData.append("price", productPrice.value);
		formData.append("photo", productPhoto.value[0]);
		try {
			await axios.post("http://localhost:3000/api/products", formData);
			router.push({ name: "Products" });
		} catch (error) {
			throw console.error(error);
		}
	};
</script>
