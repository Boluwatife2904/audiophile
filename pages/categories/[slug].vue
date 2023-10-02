<script setup lang="ts">
import products from "@/data/products.json";
const route = useRoute();
const categoryName = route.params.slug as string;
const categoryExists = products.some((product) => product.category === categoryName);

if (!categoryExists) throw createError({ statusCode: 404, statusMessage: "Category does not exist", fatal: true });

useSeoMeta({
	title: `Audiophile | ${categoryName.toUpperCase()}`
})
const productsBelongingToCategory = products.filter((product) => product.category === categoryName).reverse();
</script>

<template>
	<div class="category-page">
		<div class="category-page__header bg-black text-center">
			<h2 class="heading-2 text-white text-uppercase">{{ categoryName }}</h2>
		</div>
		<div class="category-page__content">
			<div class="container flex flex-column">
				<ProductItem v-for="(product, index) in productsBelongingToCategory" :key="product.slug" :product="product" :is-new-product="index === 0" />
			</div>
		</div>
		<div class="container">
			<CategoriesList />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.category-page {
	&__header {
		@include padding(3.2rem 2rem, 10.5rem 2rem 9.7rem, 9.8rem 2rem 9.7rem);
	}

	&__content {
		@include padding(6.4rem 0 12rem, 12rem 0, 16rem 0);

		.container {
			@include gap(12rem, 12rem, 16rem);
		}
	}
}
</style>
