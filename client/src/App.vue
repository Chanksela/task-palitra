<template>
	<PageWrapper>
		<RouterView />
	</PageWrapper>
</template>
<script setup>
	import { onMounted } from "vue";
	import { useCartStore } from "./store/cartStore";
	import { useProductStore } from "./store/productStore";

	import PageWrapper from "./components/PageWrapper.vue";

	const cartStore = useCartStore();
	const productStore = useProductStore();
	onMounted(() => {
		cartStore.readLocalStorage();
		productStore.getProducts();
	});
</script>
