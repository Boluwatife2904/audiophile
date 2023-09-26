<script setup lang="ts">
interface Props {
	productId?: number;
	updateState: boolean;
	count: number;
	usage?: string;
}

interface Emits {
	(event: "increase-count"): void;
	(event: "decrese-count"): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const { addItemToCart, reduceItemCountInCart } = useCartStore();

const increaseProductCount = () => {
	if (props.updateState) {
		addItemToCart({ productId: props.productId, count: 1 });
	} else {
		emits("increase-count");
	}
};

const decreaseProductCount = () => {
	if (props.updateState && props.productId) {
		reduceItemCountInCart(props.productId);
	} else if (!props.updateState && props.count > 1) {
		console.log("This is what is being called");
		emits("decrese-count");
	}
};
</script>

<template>
	<div class="add-to-cart bg-gray flex items-center content-between" :class="`add-to-cart--${usage}`">
		<button class="add-to-cart__button weight-700 flex items-center content-center" :disabled="!updateState && count === 1" @click="decreaseProductCount">-</button>
		<span class="add-to-cart__count weight-700 flex items-center content-center">{{ count }}</span>
		<button class="add-to-cart__button weight-700 flex items-center content-center" @click="increaseProductCount">+</button>
	</div>
</template>

<style lang="scss" scoped>
.add-to-cart {
	max-width: max-content;
	
	&--cart {
		@include gap(1.2rem);
		padding: 0.7rem 1.15rem;
	}

	&--product {
		padding: 1.6rem 1.55rem;
		@include gap(2.1rem);
	}

	&__button,
	&__count {
		@include typography(1.3rem, normal);
		height: 1.6rem;
		width: 1.6rem;
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
