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

	<LazyModalMobileMenu v-if="currentModal === 'menu'" />
	<LazyModalOrderConfirmation v-if="currentModal === 'order'" />
	<LazyModalCart v-if="currentModal === 'cart'" />
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
</style>
