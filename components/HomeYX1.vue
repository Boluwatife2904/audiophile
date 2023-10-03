<script setup lang="ts"></script>

<template>
	<div class="home-yx1 grid">
		<div class="home-yx1--left br-8">
			<img src="/images/yx1-mobile.webp" alt="YX1 earphones" class="img-fluid br-8 mobile" loading="lazy" />
			<img src="/images/yx1-tablet.webp" alt="YX1 earphones" class="img-fluid br-8 tablet" loading="lazy" />
			<img src="/images/yx1-desktop.webp" alt="YX1 earphones" class="img-fluid br-8 desktop" loading="lazy" />
		</div>
		<div class="home-yx1--right bg-gray flex flex-column items-start content-center br-8">
			<p class="heading-4 weight-700">YX1 EARPHONES</p>
			<BaseButton variant="secondary-outline" @click="navigateTo({ name: 'products-slug', params: { slug: 'yx1-earphones' } })">see product</BaseButton>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home-yx1 {
	grid-template-rows: 20rem 20rem;
	@include gap(2.4rem, 1.1rem);

	@media screen and (min-width: $tablet) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 32rem;
	}

	&--left {
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;

			&.mobile {
				@include visibility(block, none, none);
			}

			&.tablet {
				@include visibility(none, block, none);
			}

			&.desktop {
				@include visibility(none, none, block);
			}
		}
	}

	&--right {
		@include padding(0 2.4rem, 0 4.1rem, 0 9.5rem);
		@include gap(3.2rem);
	}
}
</style>
