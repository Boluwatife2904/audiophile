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
			@include margin-bottom(1.6rem);
		}

		&--product {
			@include margin-bottom(2.4rem, 1.7rem, 1.6rem);
		}
	}

	&__name {
		@include margin-bottom(2.4rem, 3.2rem);
	}
}
</style>
