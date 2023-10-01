<script setup lang="ts"></script>

<template>
	<div class="home-zx7 flex flex-column content-center br-8">
		<div class="home-zx7__content flex flex-column items-start">
			<p class="heading-4">ZX7 SPEAKER</p>
			<BaseButton variant="secondary-outline" @click="navigateTo({ name: 'products-slug', params: { slug: 'zx7-speakers' } })">see product</BaseButton>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home-zx7 {
	height: 32rem;
	background-image: url("@/assets/images/zx7-mobile.png");
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (min-width: $tablet) {
		background-image: url("@/assets/images/zx7-tablet.png");
	}

	@media screen and (min-width: $desktop) {
		background-image: url("@/assets/images/zx7-desktop.png");
	}

	&__content {
		margin: auto 0 auto 2.55rem;
		@include gap(3.2rem);

		@media screen and (min-width: $tablet) {
			margin-left: 6.225rem;
		}

		@media screen and (min-width: $desktop) {
			margin-left: 12.612rem;
		}
	}
}
</style>
