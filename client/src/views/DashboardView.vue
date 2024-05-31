<template>
	<div class="dashboard-wrapper">
		<form @submit="addProduct" enctype="multipart/form-data">
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
				<label for="photos">Photo</label>
				<br />
				<input
					type="file"
					id="photos"
					name="photos"
					v-on:change="handleFileUpload"
					multiple
					accept="image/*"
				/>
			</div>
			<button>Add Product</button>
		</form>
		<div class="products-wrapper">
			<ul class="left">
				<li v-for="product in productStore.products" class="product-wrapper">
					<div class="product-cart">
						<div>
							<img
								width="80px"
								:src="`https://kakha-palitra-task-839808583d21.herokuapp.com/${product.photo[0]}`"
								alt="product image"
							/>
							<p>{{ product.name }}</p>
						</div>
						<button @click="removeProduct(product)">Delete</button>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import axios from "axios";
	import { ref } from "vue";
	import { useRouter } from "vue-router";
	import { useProductStore } from "@/store/productStore";
	const router = useRouter();
	const productStore = useProductStore();
	const productName = ref("");
	const productPrice = ref("");
	const productPhotos = ref([]);

	const handleFileUpload = (event) => {
		productPhotos.value = event.target.files;
	};

	const addProduct = async () => {
		const formData = new FormData();
		formData.append("name", productName.value);
		formData.append("price", productPrice.value);
		for (let i = 0; i < productPhotos.value.length; i++) {
			formData.append("photos", productPhotos.value[i]);
		}
		try {
			await axios.post(
				`https://kakha-palitra-task-839808583d21.herokuapp.com/api/products`,
				formData
			);
			productName.value = "";
			productPrice.value = "";
			productPhotos.value = [];
		} catch (error) {
			console.error(error);
		}
	};
	const removeProduct = (id) => {
		productStore.removeProduct(id);
	};
</script>
<style scoped>
	.dashboard-wrapper {
		display: flex;
		justify-content: space-between;
	}
	.products-wrapper {
		width: 50%;
	}
	.product-wrapper {
		width: auto;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 50%;
	}

	.form input {
		width: 100%;
	}
	.form button {
		width: 100%;
	}
	label {
		font-weight: bold;
	}
	button {
		background-color: white;
		border-radius: 0;
		color: black;
		width: 40%;
		padding: 1rem 3rem;
		cursor: pointer;
		transition: background-color 0.3s, color 0.3s;
	}
	button:hover {
		background-color: black;
		color: white;
	}
</style>
