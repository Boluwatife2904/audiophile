<script setup lang="ts">
interface Product {
	name: string;
	slug: string;
	image: {
		mobile: string;
		desktop: string;
	};
}

interface Props {
	product: Product;
}

const props = defineProps<Props>();

const seeProduct = () => {
	navigateTo({ name: "products-slug", params: { slug: props.product.slug } });
};
</script>

<template>
	<div class="product-like flex flex-column">
		<div class="product-like__image flex items-center content-center bg-gray br-8">
			<img :src="product.image.desktop" :alt="`${product.name} image`" class="img-fluid desktop-image" loading="lazy" />
			<img :src="product.image.mobile" :alt="`${product.name} image`" class="img-fluid mobile-image" loading="lazy" />
		</div>
		<div class="product-like__content flex flex-column items-center">
			<h3 class="product-like__name text-uppercase weight-700">{{ product.name }}</h3>
			<BaseButton @click="seeProduct">see product</BaseButton>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.product-like {
	@include gap(3.2rem, 4rem);

	&__image {
		@include padding(1.6rem, 4rem, 6rem);
		height: 12rem;

		@media screen and (min-width: $tablet) {
			height: 31.8rem;
		}

		img {
			object-fit: scale-down;
		}
	}

	&__content {
		@include gap(3.2rem);
	}

	&__name {
		@include typography(2.4rem, normal);
		@include letter-spacing(0.1714rem);
	}
}
</style>
