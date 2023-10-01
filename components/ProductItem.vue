<script setup lang="ts">
interface Props {
	product: any;
}

defineProps<Props>();

const viewProduct = (productSlug: string) => {
	navigateTo({ name: "products-slug", params: { slug: productSlug } });
};
</script>

<template>
	<div class="product-item flex items-center content-between">
		<ProductItemImage :product="product" usage="category" />
		<div class="product-item__text flex flex-column">
			<ProductItemName :product="product" usage="product" />
			<div class="product-item--bottom flex flex-column items-start">
				<BaseButton @click="viewProduct(product.slug)">see product</BaseButton>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.product-item {
	@include gap(5.2rem, 5.2rem, 3.2rem);
	@include flex-direction(column, column, row);

	&:nth-child(even) {
		@include flex-direction(column, column, row-reverse);
	}

	&--top,
	&--bottom {
		align-items: center;

		@media screen and (min-width: $desktop) {
			align-items: flex-start;
		}
	}

	&__text {
		max-width: 44.5rem;
		text-align: center;

		@media screen and (min-width: $desktop) {
			text-align: initial;
		}
	}

	&--bottom {
		margin-top: 2.4rem;

		@media screen and (min-width: $desktop) {
			margin-top: 4rem;
		}
	}
}
</style>
