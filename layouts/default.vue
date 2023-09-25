<script setup lang="ts">
const { currentModal } = storeToRefs(useStore());
const { setCurrentModal } = useStore();
const route = useRoute();

const shouldShowCTA = computed(() => route.name !== "checkout");

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
	<BaseModal v-if="currentModal === 'order'" usage="order" @close-modal="setCurrentModal('')"></BaseModal>
	<BaseModal v-if="currentModal === 'cart'" usage="cart" @close-modal="setCurrentModal('')"></BaseModal>
</template>

<style scoped></style>
