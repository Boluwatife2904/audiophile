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
		<!-- <div class="product-item__image br-8 flex items-start content-center bg-gray position-relative">
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
		</div> -->
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
	flex-direction: column;

	@media screen and (min-width: $desktop) {
		flex-direction: row;
	}

	&:nth-child(even) {
		@media screen and (min-width: $desktop) {
			flex-direction: row-reverse;
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
