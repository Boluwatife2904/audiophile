<script setup lang="ts">
const images = ["desktop", "tablet", "mobile"];
</script>

<template>
	<div class="home-zx9 br-8 bg-primary position-relative flex content-center">
		<NuxtImg format="webp" v-for="image in images" :key="image" :src="`/images/oval-${image}.png`" alt="oval shapes" :class="`position-absolute img-fluid oval oval--${image}`" loading="lazy" />
		<div class="home-zx9__content flex items-start content-between">
			<div class="home-zx9__content--left">
				<NuxtImg format="webp" src="/images/zx9-desktop.png" alt="ZX9 speakers" class="img-fluid" loading="lazy" />
			</div>
			<div class="home-zx9__content--right">
				<div class="home-zx9__text">
					<h1 class="heading-1 text-white text-uppercase">
						zx9
						<br />
						speakers
					</h1>
					<p class="body-regular">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
					<BaseButton variant="secondary" @click="navigateTo({ name: 'products-slug', params: { slug: 'zx9-speakers' } })">see product</BaseButton>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home-zx9 {
	height: 60rem;
	z-index: 1;
	align-items: center;

	@media screen and (min-width: $tablet) {
		height: 72rem;
	}

	@media screen and (min-width: $desktop) {
		height: 56rem;
		align-items: end;
	}

	&__text {
		max-width: 34.9rem;
	}

	&__content {
		flex-direction: column;
		width: 100%;
		max-width: 92.1rem;
		text-align: center;
		align-items: center;

		@media screen and (min-width: $desktop) {
			text-align: initial;
			flex-direction: row;
			align-items: initial;
		}

		&--left {
			max-width: 17.2rem;
			max-height: 20.7rem;

			@media screen and (min-width: $tablet) {
				max-width: 19.7rem;
				max-height: 23.7rem;
			}

			@media screen and (min-width: $desktop) {
				height: 100%;
				width: 100%;
				max-height: 49.3rem;
				max-width: 41rem;
			}

			img {
				height: 100%;
				width: 100%;
				object-fit: contain;
			}
		}

		&--right {
			@include padding(3.2rem 2.4rem 0, 3.7rem 0 0);

			h1 {
				@include margin-bottom(2.4rem);
			}

			p {
				@include margin-bottom(2.4rem, 4rem);
				color: rgba(255, 255, 255, 0.75);
			}
		}
	}

	.oval {
		height: 100%;
		width: 100%;
		object-fit: contain;
		z-index: -1;

		&--mobile {
			@include visibility(block, none, none);
			top: -17%;
		}

		&--tablet {
			@include visibility(none, block, none);
			top: -15%;
		}

		&--desktop {
			@include visibility(none, none, block);
			bottom: 0;
			left: -15.75rem;
		}
	}
}
</style>
