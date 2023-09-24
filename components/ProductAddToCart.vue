<script setup lang="ts">
interface Props {
	updateState: boolean;
	count: number;
}

defineProps<Props>();

const increaseProductCount = () => {};

const decreaseProductCount = () => {};
</script>

<template>
	<div class="add-to-cart bg-gray flex items-center content-between">
		<button class="add-to-cart__button weight-700 flex items-center content-center" @click="decreaseProductCount">-</button>
		<span class="add-to-cart__count weight-700 flex items-center content-center">{{ count }}</span>
		<button class="add-to-cart__button weight-700 flex items-center content-center" @click="increaseProductCount">+</button>
	</div>
</template>

<style lang="scss" scoped>
.add-to-cart {
	padding: 1.6rem 1.55rem;
	max-width: max-content;
	@include gap(2.1rem);

	&__button,
	&__count {
		@include typography(1.3rem, normal);
		min-height: 1.6rem;
		min-width: 1.6rem;
		color: $black;
	}

	&__button {
		color: rgb(0, 0, 0, 0.25);
		transition: all 0.2s ease;

		&:hover {
			color: $primary;
		}
	}
}
</style>
