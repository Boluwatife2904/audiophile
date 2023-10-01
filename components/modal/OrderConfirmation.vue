<script setup lang="ts">
const { setCurrentModal } = useStore();
const { clearCart } = useCartStore();
const { orderData } = storeToRefs(useOrderStore());

const firstOrderItem = computed(() => {
	return orderData.value.orderItems[0];
});
const restOfOrderItems = computed(() => {
	return orderData.value.orderItems.slice(1);
});
const haveMoreThanOneOrderItem = computed(() => {
	return orderData.value.orderItems.length > 1;
});

const isShowingRestOfItems = ref(false);

const clearCartAndNavigateHome = () => {
	clearCart();
	navigateTo({ name: "index" });
};
</script>

<template>
	<BaseModal usage="order" :is-closable="false" @close-modal="setCurrentModal('')">
		<section class="order-modal d-flex flex-column items-start">
			<div class="order-modal__header flex flex-column">
				<IconCheck />
				<div class="order-modal__text flex flex-column">
					<h3 class="text-black weight-700 text-uppercase">
						thank you
						<br />
						for your order
					</h3>
					<p class="body-regular weight-500 text-black-light">You will receive an email confirmation shortly.</p>
				</div>
			</div>
			<div class="order-data grid br-8">
				<div class="order-data--left bg-gray flex flex-column content-center">
					<div class="order-data__items flex flex-column">
						<CartListItem :item="firstOrderItem" />
						<template v-if="isShowingRestOfItems && haveMoreThanOneOrderItem">
							<CartListItem v-for="(item, index) in restOfOrderItems" :key="index" :item="item" />
						</template>
					</div>
					<button v-if="haveMoreThanOneOrderItem" class="weight-700 order-data__toggler text-center w-100 block text-center" :class="{ 'order-data__toggler--open': isShowingRestOfItems }" title="View more" @click="isShowingRestOfItems = !isShowingRestOfItems">
						<template v-if="isShowingRestOfItems">View less</template>
						<template v-else>and {{ restOfOrderItems.length }} other item(s)</template>
					</button>
				</div>
				<div class="order-data--right bg-black flex flex-column content-end gap-8">
					<span class="body-regular weight-500 text-uppercase">grant total</span>
					<p class="text-white weight-700">$ {{ formatPriceWithCommas(orderData.grandTotal) }}</p>
				</div>
			</div>
			<BaseButton size="full" @click="clearCartAndNavigateHome">back to home</BaseButton>
		</section>
	</BaseModal>
</template>

<style lang="scss" scoped>
.order-modal {
	&__header {
		@include gap(2.3rem, 3.3rem);
		@include margin-bottom(2.4rem, 3.3rem);
	}

	&__text {
		@include gap(1.6rem, 2.4rem);

		h3 {
			@include typography(2.4rem, 2.8rem, 3.2rem, 3.6rem);
			@include letter-spacing(0.086rem, 0.114rem);
		}
	}
}

.order-data {
	overflow: hidden;
	@include margin-bottom(2.4rem, 4.6rem);

	@media screen and (min-width: $tablet) {
		grid-template-columns: 55% 45%;
	}

	&--left {
		@include padding(2.4rem);
	}

	&--right {
		@include padding(1.5rem 2.4rem 1.9rem, 4.1rem 2.4rem);

		span {
			color: rgba(255, 255, 255, 0.5);
		}

		p {
			@include typography(1.8rem, normal);
		}
	}

	&__items {
		@include gap(1.6rem);
	}

	&__toggler {
		border-top: 1px solid rgba(0, 0, 0, 0.08);
		padding-top: 1.2rem;
		@include typography(1.2rem, normal);
		color: rgba(0, 0, 0, 0.5);
		margin-top: 1.2rem;

		&--open {
			margin-top: 1.6rem;
		}
	}
}
</style>
