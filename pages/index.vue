<script setup lang="ts"></script>

<template>
	<div class="home">
		<div class="home-hero"></div>
		<div class="home-content">
			<div class="container">
				<CategoriesList />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home {
	&-content {
		padding: 12rem 0 0;
		margin-bottom: 4rem;
	}
}
</style>
