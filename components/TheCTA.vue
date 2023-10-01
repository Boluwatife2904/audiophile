<script setup lang="ts">
const route = useRoute();
</script>

<template>
	<section class="cta" :class="{ 'cta--index': route.name === 'index' }">
		<div class="container cta__container flex items-center">
			<div class="cta--left flex flex-column">
				<h2 class="heading-2 weight-700 text-uppercase text-black">
					Bringing you the
					<span class="text-primary">best</span>
					audio gear
				</h2>
				<p class="cta__message text-black-light body-regular weight-500">
					Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable
					audio equipment.
				</p>
			</div>
			<div class="cta--right br-8"></div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.cta {
	@include padding(12rem 0, 12rem 0, 16rem 0);

	&--index {
		@include padding(12rem 0, 9.6rem 0, 20rem 0);
	}

	&__container {
		@include flex-direction(column-reverse, column-reverse, row);
		@include gap(4rem 0rem, 6.3rem 12.5rem);
	}

	&--left {
		@include gap(3.2rem);
		text-align: center;

		@media screen and (min-width: $tablet) {
			max-width: 57.3rem;
		}

		@media screen and (min-width: $desktop) {
			text-align: initial;
			max-width: 44.5rem;
		}
	}

	&--right {
		height: auto;
		width: 100%;
		background-image: url("/images/cta-mobile.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top;
		min-height: 30rem;

		@media screen and (min-width: $tablet) {
			background-image: url("/images/cta-tablet.png");
		}

		@media screen and (min-width: $desktop) {
			background-image: url("/images/cta-desktop.png");
			max-width: 54rem;
			min-height: 58.8rem;
		}
	}
}
</style>
