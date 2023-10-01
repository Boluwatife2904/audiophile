<script setup lang="ts">
interface Props {
	item: CartProduct;
	usage?: string;
}

const { usage = "checkout" } = defineProps<Props>();
</script>

<template>
	<li class="cart-item flex gap-16 items-center">
		<div class="cart-item--left flex items-center gap-16">
			<div class="cart-item__image br-8 bg-gray">
				<NuxtImg format="webp" :src="item.image.mobile" :alt="`${item.name} image`" class="img-fluid" loading="lazy" />
			</div>
		</div>
		<div class="cart-item--right flex content-between" :class="usage === 'cart' ? 'items-center' : 'items-start'">
			<div class="cart-item__text">
				<p class="body-regular weight-700 text-black">{{ item.shortName }}</p>
				<p class="cart-item__price text-black-light weight-700">$ {{ formatPriceWithCommas(item.price) }}</p>
			</div>
			<p v-if="usage === 'checkout'" class="cart-item__count body-regular weight-700 text-black-light">x{{ item.count }}</p>
			<ProductAddToCart v-else-if="usage === 'cart'" :count="item.count" :product-id="item.id" :update-state="true" usage="cart" />
		</div>
	</li>
</template>

<style lang="scss" scoped>
.cart-item {
	&__image {
		height: 6.4rem;
		width: 6.4rem;
		padding: 1.2rem;

		img {
			object-fit: cover;
		}
	}

	&__price {
		@include typography(1.4rem, 2.5rem);
	}

	&--right {
		width: 100%;
	}
}
</style>
