<script setup lang="ts">
interface Props {
	category: any;
}

defineProps<Props>();
</script>

<template>
	<div class="category-item text-center position-relative flex flex-column">
		<div class="category-item__image position-relative flex items-center content-center mx-auto">
			<img :src="`/images/categories/${category}.webp`" :alt="`${category} image`" class="img-fluid" loading="lazy" />
			<span class="block position-absolute">
				<svg xmlns="http://www.w3.org/2000/svg" width="183" height="102" viewBox="0 0 183 102" fill="none">
					<g filter="url(#filter0_f_0_4622)">
						<ellipse cx="91.5" cy="51" rx="47.4444" ry="7" fill="black" />
					</g>
					<defs>
						<filter id="filter0_f_0_4622" x="0.563034" y="0.507492" width="181.874" height="100.985" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
							<feGaussianBlur stdDeviation="21.7463" result="effect1_foregroundBlur_0_4622" />
						</filter>
					</defs>
				</svg>
			</span>
		</div>
		<div class="category-item__text flex flex-column">
			<p class="category-item__name body-regular text-black text-uppercase weight-700">{{ category }}</p>
			<NuxtLink :to="{ name: 'categories-slug', params: { slug: category } }" class="base-link base-link--shop flex items-center content-center">
				shop
				<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
					<path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2" />
				</svg>
			</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.category-item {
	z-index: 1;
	@include gap(3.6rem);

	&:last-child {
		.category-item__image {
			max-width: 10.7rem;
			max-height: 12.3rem;

			@media screen and (min-width: $desktop) {
				max-width: 14rem;
				max-height: 14rem;
			}
		}
	}

	&__image {
		max-width: 8.4rem;
		max-height: 10.4rem;

		@media screen and (min-width: $desktop) {
			max-width: 14rem;
			max-height: 14rem;
		}

		span {
			display: block;
			bottom: -50%;
			left: 50%;
			transform: translate(-50%, -5%);
		}
	}

	&__text {
		@include gap(1.7rem);

		a {
			@include gap(1.332rem);
		}
	}

	&::after {
		content: "";
		position: absolute;
		border-radius: 0.8rem;
		background: #f1f1f1;
		width: 100%;
		height: 16.5rem;
		left: 0;
		bottom: -3rem;
		z-index: -1;

		@media screen and (min-width: $desktop) {
			height: 20.4rem;
		}
	}
}
</style>
