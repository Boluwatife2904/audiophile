<script setup lang="ts">
const { currentModal } = storeToRefs(useStore());
const { setCurrentModal } = useStore();
const route = useRoute();
const router = useRouter();

const shouldShowCTA = computed(() => route.name !== "checkout");

const goToCheckout = () => {
	router.push({ name: "checkout" });
};

watch(
	() => route.fullPath,
	() => {
		setCurrentModal("");
	}
);
</script>

<template>
	<TheNavbar />
	<main :class="route.name === 'checkout' ? 'bg-gray' : 'bg-gray-light'">
		<slot />
		<LazyTheCTA v-if="shouldShowCTA" />
	</main>
	<TheFooter />
	<BaseModal v-if="currentModal === 'menu'" usage="menu" @close-modal="setCurrentModal('')">
		<CategoriesList />
	</BaseModal>
	<BaseModal v-if="currentModal === 'order'" usage="order" @close-modal="setCurrentModal('')">
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
			<BaseButton size="full">back to home</BaseButton>
		</section>
	</BaseModal>
	<BaseModal v-if="currentModal === 'cart'" usage="cart" @close-modal="setCurrentModal('')">
		<section class="flex flex-column gap-24">
			<CartList usage="cart" />
			<BaseButton size="full" @click="goToCheckout">checkout</BaseButton>
		</section>
	</BaseModal>
</template>

<style lang="scss" scoped>
.order-modal {
	&__header {
		@include gap(2.3rem, 3.3rem);
		@include margin-bottom(2.4rem, 3.3rem)
	}

	&__text {
		@include gap(1.6rem, 2.4rem);

		h3 {
			@include typography(2.4rem, 2.8rem, 3.2rem, 3.6rem);
			@include letter-spacing(0.086rem, 0.114rem);
		}
	}
}
</style>
