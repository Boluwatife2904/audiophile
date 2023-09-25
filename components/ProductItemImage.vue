<script setup lang="ts">
interface Props {
	usage: string;
	product: any;
}

const { usage = "category" } = defineProps<Props>();
</script>

<template>
	<div class="product-item__image br-8 flex items-start content-center bg-gray position-relative" :class="`product-item__image--${usage}`">
		<img :src="product.image.desktop" :alt="`${product.name} image`" class="img-fluid desktop-image" />
		<img :src="product.image.mobile" :alt="`${product.name} image`" class="img-fluid mobile-image" />
		<span class="block position-absolute">
			<svg xmlns="http://www.w3.org/2000/svg" width="253" height="123" viewBox="0 0 253 123" fill="none">
				<g opacity="0.152113" filter="url(#filter0_f_0_4765)">
					<ellipse cx="126.5" cy="61.5" rx="82.5" ry="17.5" fill="black" />
				</g>
				<defs>
					<filter id="filter0_f_0_4765" x="0.507492" y="0.507492" width="251.985" height="121.985" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="21.7463" result="effect1_foregroundBlur_0_4765" />
					</filter>
				</defs>
			</svg>
		</span>
	</div>
</template>

<style lang="scss" scoped>
.product-item__image {
	padding: 4rem;
	width: 100%;

	@media screen and (min-width: $desktop) {
		max-width: 54rem;
	}

	&--product {
		height: 32.7rem;

		@media screen and (min-width: $tablet) {
			height: 48rem;
		}

		@media screen and (min-width: $desktop) {
			height: 56rem;
		}
	}

	&--category {
		@include padding(4rem, 4rem, 8rem);
		height: 35.2rem;

		@media screen and (min-width: $desktop) {
			max-width: 54rem;
			height: 56rem;
		}
	}

	img {
		object-fit: scale-down;
	}

	span {
		display: block;
		bottom: -2.5rem;
		left: 50%;
		transform: translate(-50%, -5%);

		@media screen and (min-width: $desktop) {
			bottom: 1rem;
		}
	}
}
</style>
