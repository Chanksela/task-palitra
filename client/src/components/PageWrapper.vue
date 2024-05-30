<template>
	<div>
		<header>
			<nav>
				<ul class="nav">
					<li>
						<RouterLink :to="{ name: 'Products' }">Home</RouterLink>
					</li>
					<li>
						<RouterLink :to="{ name: 'Cart' }">Cart</RouterLink>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<slot></slot>
		</main>
	</div>
</template>
<script></script>
<style scoped>
	header {
		height: 3rem;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
	}
	nav {
		width: 100%;
	}
	a {
		text-decoration: none;
		color: black;
	}
	.nav {
		display: flex;
		justify-content: space-between;
		padding: 0 2.5rem;
	}
</style>
