<script setup lang="ts">
const { setCurrentModal } = useStore();
</script>

<template>
	<BaseModal usage="order" @close-modal="setCurrentModal('')">
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
