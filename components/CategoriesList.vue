<script setup lang="ts">
const categories = ["headphones", "speakers", "earphones"];
</script>

<template>
	<div class="categories-list">
		<div class="categories-list__container grid">
			<CategoriesListItem v-for="category in categories" :key="category" :category="category" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.categories-list__container {
	grid-template-columns: repeat(auto-fit, minmax(22.3rem, 1fr));
	@include gap(4.6rem, 4.6rem 1rem, 4.6rem 3rem);
}
</style>
