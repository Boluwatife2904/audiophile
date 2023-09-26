<script setup lang="ts">
import { formatPriceWithCommas } from "~/utils";

interface Props {
	usage?: string;
}
const { usage = "cart" } = defineProps<Props>();

const { cartProducts, cartTotal } = storeToRefs(useCartStore());
const { clearCart } = useCartStore();
</script>

<template>
	<section class="cart-list">
		<div class="cart-list__header flex items-center content-between">
			<h6 class="heading-6 weight-700 text-black text-uppercase">
				<template v-if="usage === 'cart'">cart ({{ cartProducts.length }})</template>
				<template v-else-if="usage === 'checkout'">summary</template>
			</h6>
			<button v-if="usage === 'cart'" class="text-black-light body-regular weight-500 cart-list__remove" @click="clearCart">Remove all</button>
		</div>
		<ul class="flex flex-column gap-24">
			<CartListItem v-for="item in cartProducts" :index="item.id" :item="item" :usage="usage" />
		</ul>
		<div class="cart-list__totals flex flex-column gap-8">
			<p class="flex content-between">
				<span class="text-black-light body-regular weight-500 text-uppercase">total</span>
				<span class="text-black weight-700 heading-6">${{ formatPriceWithCommas(cartTotal) }}</span>
			</p>
			<template v-if="usage === 'checkout'">
				<p class="flex content-between">
					<span class="text-black-light body-regular weight-500 text-uppercase">shipping</span>
					<span class="text-black weight-700 heading-6">$50</span>
				</p>
				<p class="flex content-between">
					<span class="text-black-light body-regular weight-500 text-uppercase">vat (included)</span>
					<span class="text-black weight-700 heading-6">${{ formatPriceWithCommas(Math.floor(0.2 * cartTotal)) }}</span>
				</p>
			</template>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.cart-list {
	&__header {
		@include margin-bottom(3.1rem);
	}

	&__remove {
		text-decoration: underline;

		&:hover {
			color: $primary !important;
		}
	}

	&__totals {
		margin-top: 3.2rem;
	}
}
</style>
