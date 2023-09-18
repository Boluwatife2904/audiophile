<script setup lang="ts">
interface Props {
	product: any;
	usage: string;
}

const { usage = "category" } = defineProps<Props>();
</script>

<template>
	<div class="product-item__text">
		<span v-if="product.new" class="block body-overline text-uppercase text-primary product-item__new" :class="`product-item__new--${usage}`">new product</span>
		<h2 class="heading-2 text-black text-uppercase weight-700 product-item__name">
			{{ product.name.toLowerCase().replace(product.category, "") }}
			<br />
			{{ product.category }}
		</h2>
		<p class="body-regular text-black-light weight-500 product-item__category">{{ product.description }}</p>
	</div>
</template>

<style lang="scss" scoped>
.product-item {
	&__text {
		@media screen and (min-width: $tablet) {
			max-width: 45rem;
		}
	}

	&__new {
		&--category {
			margin-bottom: 1.6rem;
		}

		&--product {
			margin-bottom: 2.4rem;

			@media screen and (min-width: $tablet) {
				margin-bottom: 1.7rem;
			}

			@media screen and (min-width: $desktop) {
				margin-bottom: 1.6rem;
			}
		}
	}

	&__name {
		margin-bottom: 2.4rem;

		@media screen and (min-width: $tablet) {
			margin-bottom: 3.2rem;
		}
	}
}
</style>
