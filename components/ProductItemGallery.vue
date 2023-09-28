<script setup lang="ts">
interface Props {
	product: Product;
}

defineProps<Props>();
</script>

<template>
	<section class="product-gallery grid">
		<div class="first br-8">
			<img :src="product.gallery.first.mobile" :alt="`${product.name} image`" class="mobile-image img-fluid" />
			<img :src="product.gallery.first.desktop" :alt="`${product.name} image`" class="desktop-image img-fluid" />
		</div>
		<div class="second br-8">
			<img :src="product.gallery.second.mobile" :alt="`${product.name} image`" class="mobile-image img-fluid" />
			<img :src="product.gallery.second.desktop" :alt="`${product.name} image`" class="desktop-image img-fluid" />
		</div>
		<div class="third br-8">
			<img :src="product.gallery.third.mobile" :alt="`${product.name}  image`" class="mobile-image img-fluid" />
			<img :src="product.gallery.third.desktop" :alt="`${product.name}  image`" class="desktop-image img-fluid" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.product-gallery {
	@include gap(2rem, 2rem 1.8rem, 3.2rem 3rem);
	grid-template-rows: repeat(4, 17.4rem);

	@media screen and (min-width: $tablet) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 17.4rem);
	}

	@media screen and (min-width: $desktop) {
		grid-template-rows: 28rem 28rem;
	}

	div {
		overflow: hidden;
	}

	& > div:nth-child(3) {
		grid-row: 3 / span 2;

		@media screen and (min-width: $tablet) {
			grid-row: 1 / span 2;
			grid-column: 2 / span 2;
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}
}
</style>
