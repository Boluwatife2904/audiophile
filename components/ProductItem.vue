<script setup lang="ts">
interface Props {
	product: any;
}

defineProps<Props>();
</script>

<template>
	<div class="product-item flex items-center content-between">
		<div class="product-item__image br-8 flex items-start content-center bg-gray position-relative">
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
		<div class="product-item__text flex flex-column">
			<div class="product-item--top flex flex-column items-start">
				<span v-if="product.new" class="body-overline text-uppercase text-primary">new product</span>
				<h2 class="heading-2 text-black text-uppercase weight-700 product-item__name">
					{{ product.name.toLowerCase().replace(product.category, "") }}
					<br />
					{{ product.category }}
				</h2>
			</div>
			<div class="product-item--bottom flex flex-column items-start">
				<p class="body-regular text-black opacity-50 weight-500">{{ product.description }}</p>
				<BaseButton>see product</BaseButton>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.product-item {
	@include gap(5.2rem, 5.2rem, 3.2rem);
	flex-direction: column;

	@media screen and (min-width: $desktop) {
		flex-direction: row;
	}

	&:nth-child(even) {
		@media screen and (min-width: $desktop) {
			flex-direction: row-reverse;
		}
	}

	&__image {
		width: 100%;
		padding: 4rem;
		height: 35.2rem;

		@media screen and (min-width: $desktop) {
			max-width: 54rem;
			height: 56rem;
			padding: 8rem;
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

	&--top,
	&--bottom {
		align-items: center;

		@media screen and (min-width: $desktop) {
			align-items: flex-start;
		}
	}

	&__text {
		@include gap(3.2rem);
		max-width: 44.5rem;
		text-align: center;

		@media screen and (min-width: $desktop) {
			text-align: initial;
		}
	}

	&--top {
		@include gap(1.6rem);
	}

	&--bottom {
		@include gap(2.4rem, 2.4rem, 4rem);
	}
}

.desktop-image {
	display: none;

	@media screen and (min-width: $desktop) {
		display: block;
	}
}

.mobile-image {
	display: block;

	@media screen and (min-width: $desktop) {
		display: none;
	}
}
</style>
