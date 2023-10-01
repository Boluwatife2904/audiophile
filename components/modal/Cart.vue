<script setup lang="ts">
const router = useRouter();
const { setCurrentModal } = useStore();
const { cartItems } = storeToRefs(useCartStore());

const goToCheckout = () => {
	router.push({ name: "checkout" });
};
</script>

<template>
	<BaseModal usage="cart" @close-modal="setCurrentModal('')">
		<section class="flex flex-column gap-24">
			<CartList usage="cart" />
			<BaseButton v-if="cartItems.length > 0" size="full" @click="goToCheckout">checkout</BaseButton>
		</section>
	</BaseModal>
</template>

<style scoped></style>
