<script setup lang="ts"></script>

<template>
	<section class="home-hero">
		<TheNavbar />
		<div class="container flex items-center">
			<div class="home-hero__text">
				<span class="block text-uppercase">new product</span>
				<h1 class="heading-1 text-white text-uppercase">XX99 Mark II Headphones</h1>
				<p class="body-regular weight-500">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
				<BaseButton @click="navigateTo({ name: 'products-slug', params: { slug: 'xx99-mark-two-headphones' } })">see product</BaseButton>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.home-hero {
	background-color: #121212;
	background-image: url("/hero-bg-mobile.webp");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 60rem;

	@media screen and (min-width: $tablet) {
		height: 72.9rem;
		background-image: url("/hero-bg-tablet.webp");
	}

	@media screen and (min-width: $desktop) {
		background-image: url("/hero-bg-desktop.webp");
	}

	.container {
		height: 100%;
	}

	&__text {
		width: 100%;
		text-align: center;
		@include margin-bottom(11.2rem, 16.7rem, 15.8rem);

		@media screen and (min-width: $tablet) {
			margin-left: auto;
			margin-right: auto;
			max-width: 39.6rem;
		}

		@media screen and (min-width: $desktop) {
			margin-left: initial;
			margin-right: initial;
			text-align: initial;
		}

		span {
			@include typography(1.4rem, normal);
			@include letter-spacing(1rem);
			@include margin-bottom(1.6rem, 2.4rem);
			color: rgba(255, 255, 255, 0.4964);
		}

		h1 {
			@include margin-bottom(2.4rem);
		}

		p {
			@include margin-bottom(2.8rem, 4rem);
			max-width: 34.9rem;
			color: rgba(255, 255, 255, 0.75);
			margin-left: auto;
			margin-right: auto;

			@media screen and (min-width: $desktop) {
				margin-left: initial;
				margin-right: initial;
			}
		}
	}
}
</style>
