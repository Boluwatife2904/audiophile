<script setup lang="ts">
const footerSocials = [
	{ icon: "facebook", name: "facebook", url: "#" },
	{ icon: "twitter", name: "twitter", url: "#" },
	{ icon: "instagram", name: "instagram", url: "#" },
];
</script>

<template>
	<footer class="footer bg-secondary">
		<div class="container">
			<div class="footer--top flex content-between">
				<div class="footer__logo position-relative">
					<AppLogo />
				</div>
				<AppLinks />
			</div>
			<div class="footer--middle">
				<p class="text-white-light body-regular weight-500">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
			</div>
			<div class="footer--bottom flex items-center content-between">
				<p class="footer__copyright text-white-light weight-700">Copyright 2021. All Rights Reserved</p>
				<ul class="footer__socials flex items-center">
					<li v-for="social in footerSocials" :key="social.name" class="footer__social">
						<a :href="social.url" target="_blank" rel="noopener noreferrer" class="base-link base-link--navigation">
							<IconSocials :variant="social.icon" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	@include padding(5.2rem 0 3.8rem, 6rem 0 4.6rem, 7.5rem 0 4.8rem);
	// min-height: 36.5rem;
	text-align: center;

	@media screen and (min-width: $tablet) {
		text-align: left;
	}

	&--top {
		flex-direction: column;
		@include gap(4.8rem 3rem, 3.2rem 3rem);
		@include margin-bottom(4.8rem, 3.2rem, 3.6rem);

		@media screen and (min-width: $desktop) {
			flex-direction: row;
		}
	}

	&--middle {
		@include margin-bottom(4.8rem, 8rem, 5.6rem);

		@media screen and (min-width: $desktop) {
			max-width: 54rem;
		}
	}

	&--bottom {
		flex-direction: column;

		@media screen and (min-width: $tablet) {
			flex-direction: row;
		}
	}

	&--bottom {
		@include gap(4.8rem 3rem, 3.2rem 3rem);
	}

	&__logo {
		&::after {
			content: "";
			left: 50%;
			transform: translateX(-50%);
			position: absolute;
			height: 0.4rem;
			width: 10.1rem;
			background-color: $primary;
			top: -5.2rem;

			@media screen and (min-width: $tablet) {
				top: -6rem;
				left: 0;
				transform: translateX(0);
			}

			@media screen and (min-width: $desktop) {
				// top: -6rem;
			}
		}
	}

	&__socials {
		@include gap(1.6rem);

		@media screen and (min-width: $desktop) {
			transform: translateY(-8.7rem);
		}
	}
}
</style>
