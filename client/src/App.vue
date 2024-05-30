<template>
	<PageWrapper>
		<RouterView />
	</PageWrapper>
</template>
<script>
	import PageWrapper from "./components/PageWrapper.vue";
	export default {
		name: "App",
		components: {
			PageWrapper,
		},
	};
</script>
