<script setup lang="ts">
const route = useRoute();

const shouldShowCTA = computed(() => route.name !== "checkout");
</script>

<template>
	<TheNavbar />
	<main :class="route.name === 'checkout' ? 'bg-gray' : 'bg-gray-light'">
		<slot />
		<LazyTheCTA v-if="shouldShowCTA" />
	</main>
	<TheFooter />
</template>

<style scoped></style>
