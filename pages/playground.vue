<script setup lang="ts">
const colors = [
	{ bgColor: "bg-primary", hex: "#D87D4A", rgb: "216, 125, 74", hsl: "22°, 65%, 57%" },
	{ bgColor: "bg-secondary", hex: "#101010", rgb: "16, 16, 16", hsl: "0°, 0%, 6%" },
	{ bgColor: "bg-gray", hex: "#F1F1F1", rgb: "241, 241, 241", hsl: "0°, 0%, 95%" },
	{ bgColor: "bg-gray-light", hex: "#FAFAFA", rgb: "250, 250, 250", hsl: "0°, 0%, 98%" },
	{ bgColor: "bg-primary-light", hex: "#FBAF85", rgb: "251, 175, 133", hsl: "21°, 94%, 75%" },
	{ bgColor: "bg-white", hex: "#FFFFFF", rgb: "255, 255, 255", hsl: "0°, 0%, 100%" },
	{ bgColor: "bg-black", hex: "#000000", rgb: "0, 0, 0", hsl: "0°, 0%, 0%" },
];

const selectedOption = ref("");
</script>

<template>
	<div class="playground mx-auto">
		<h1 class="text-uppercase playground__title text-right">design system</h1>
		<!-- COLORS -->
		<section class="p-section">
			<h4 class="p-section__title heading-4 weight-700 flex items-center">
				<span class="text-primary">01</span>
				<span class="text-uppercase text-black">colors</span>
			</h4>
			<div class="p-section__content">
				<div class="colors-grid grid">
					<div v-for="{ bgColor, hex, rgb, hsl } in colors" :key="bgColor" class="c-card flex flex-column">
						<div :class="['c-card__background br-8', `${bgColor}`]"></div>
						<div class="c-card__text flex flex-column">
							<p class="text-black body-regular weight-700 flex items-center flex-wrap">
								<span class="weight-500 opacity-50">HEX</span>
								{{ hex }}
							</p>
							<p class="text-black body-regular weight-700 flex items-center flex-wrap">
								<span class="weight-500 opacity-50">RGB</span>
								{{ rgb }}
							</p>
							<p class="text-black body-regular weight-700 flex items-center flex-wrap">
								<span class="weight-500 opacity-50">HSL</span>
								{{ hsl }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- TYPOGRAPHY -->
		<section class="p-section typography">
			<h4 class="p-section__title heading-4 weight-700 flex items-center">
				<span class="text-primary">02</span>
				<span class="text-uppercase text-black">typography</span>
			</h4>
			<div class="p-section__content">
				<div class="typography__header bg-gray flex content-between flex-wrap">
					<h2 class="text-black heading-2">MANROPE</h2>
					<p class="text-black opacity-50 text-justify weight-700 typography__letters">ABDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+</p>
				</div>
				<div class="typography__grid grid">
					<div class="typography--left flex flex-column">
						<div class="typography__text flex flex-column">
							<span class="text-black opacity-50 body-regular">H1 - Manrope Bold - 56px (All Caps, 58px Line Space, 2px Char. Space)</span>
							<h1 class="heading-1 weight-700 text-uppercase">Morbi interdum mollis sapien</h1>
						</div>
						<div class="typography__text flex flex-column">
							<span class="text-black opacity-50 body-regular">H2 - Manrope Bold - 40px (All Caps, 44px Line Space, 1,5px Char. Space)</span>
							<h2 class="heading-2 weight-700 text-uppercase">Donec nec justo eget felis facilisis</h2>
						</div>
						<div class="typography__text flex flex-column">
							<span class="text-black opacity-50 body-regular">H3 - Manrope Bold - 32px (All Caps, 36px Line Space, 1,15px Char. Space)</span>
							<h3 class="heading-3 weight-700 text-uppercase">Nunc sem lacus accum</h3>
						</div>
						<div class="typography__text flex flex-column">
							<span class="text-black opacity-50 body-regular">H4 - Manrope Bold - 28px (All Caps, 38px Line Space, 2px Char. Space)</span>
							<h4 class="heading-4 weight-700 text-uppercase">interdum consectetuer</h4>
						</div>
						<div class="typography__text flex flex-column">
							<span class="text-black opacity-50 body-regular">H5 - Manrope Bold - 24px (All Caps, 33px Line Space, 1,7px Char. Space)</span>
							<h5 class="heading-5 weight-700 text-uppercase">nascetur ridiculus mus</h5>
						</div>
						<div class="typography__text flex flex-column">
							<span class="text-black opacity-50 body-regular">H6 - Manrope Bold - 18px (All Caps, 24px Line Space, 1,3px Char. Space)</span>
							<h6 class="heading-6 weight-700 text-uppercase">natoque penatibus et</h6>
						</div>
						<div class="typography__text flex flex-column">
							<span class="text-black opacity-50 body-regular">Overline - Manrope Regular - 14px (All Caps, 19px Line Space, 10px Char. Space)</span>
							<p class="body-overline text-uppercase body-overline text-primary">LOREM IPSUM</p>
						</div>
						<div class="typography__text flex flex-column">
							<span class="text-black opacity-50 body-regular">Sub Title - Manrope Bold - 13px (All Caps, 25px Line Space, 1px Char. Space)</span>
							<p class="body-small weight-700 text-uppercase text-primary">Fusce ut est sed dolor gravida convallis</p>
						</div>
					</div>
					<div class="typography--right">
						<div class="typography__text flex flex-column">
							<span class="text-black opacity-50 body-regular">Body - Manrope Medium - 15px (25px Line Space)</span>
							<p class="body-regular weight-500">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
								<br />
								<br />
								Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
								arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus
								ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
								<br />
								<br />
								Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in
								ante. Vivamus imperdiet nibh feugiat est.
								<br />
								<br />
								Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis xdis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut
								condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- BUTTONS -->
		<section class="p-section">
			<h4 class="p-section__title heading-4 weight-700 flex items-center">
				<span class="text-primary">03</span>
				<span class="text-uppercase text-black">BUTTONS</span>
			</h4>
			<div class="p-section__content">
				<BaseButton>see product</BaseButton>
				<BaseButton variant="secondary-outline">see product</BaseButton>
				<BaseButton variant="secondary">see product</BaseButton>
			</div>
		</section>
		<!-- FORM COMPONENT -->
		<section class="p-section form-components">
			<h4 class="p-section__title heading-4 weight-700 flex items-center">
				<span class="text-primary">04</span>
				<span class="text-uppercase text-black">form elements</span>
			</h4>
			<div class="p-section__content">
				<div class="grid form-components__grid">
					<BaseInput id="name" name="name" label="Name" placeholder="Insert your name" />
					<BaseRadio id="paymentMethod" v-model="selectedOption" name="paymentMethod" label="e-Money" value="e-Money" />
				</div>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.playground {
	max-width: 131rem;
	padding: 7.2rem 2rem 16.3rem;

	@media screen and (min-width: $desktop) {
		padding: 7.2rem 3.2rem 16.3rem;
		max-width: 117.4rem;
	}

	&__title {
		margin-bottom: 10.4rem;
	}
}

.p-section {
	&:not(:last-child) {
		margin-bottom: 18rem;
	}

	&__title {
		@include gap(3.4rem);
		margin-bottom: 5.6rem;
	}
}

.c-card {
	@include gap(1.6rem);

	&__background {
		@include component-size(9.4rem, 100%);
	}

	&__text {
		@include gap(0.4rem);
		p {
			@include gap(1rem 6.6rem);
		}
	}

	&:nth-child(6) {
		.c-card__background {
			border: 1px solid rgba(76, 76, 76, 0.2);
		}
	}
}

.colors-grid {
	grid-template-columns: repeat(auto-fit, minmax(25.5rem, 1fr));
	@include gap(6.5rem 3rem);
}

.typography {
	&__header {
		padding: 3.2rem;
		@include gap(2rem);
		margin-bottom: 6.4rem;

		@media screen and (min-width: $tablet) {
			padding: 6.4rem;
		}
	}

	&__letters {
		width: 100%;
		max-width: 52rem;
		word-wrap: break-word;
		@include typography(2rem, initial);
		letter-spacing: 8.229px;
	}

	&__grid {
		@include gap(2rem 5.4rem);

		@media screen and (min-width: $desktop) {
			grid-template-columns: 51.6rem auto;
		}
	}

	&--left {
		@include gap(4rem);
	}

	&__text {
		@include gap(1.2rem);
	}
}

.form-components {
	&__grid {
		grid-template-columns: repeat(3, 30.9rem);
		align-items: end;
		gap: 7.7rem;
	}
}
</style>
