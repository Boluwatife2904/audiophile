<script setup lang="ts">
import products from "@/data/products.json";
const route = useRoute();
const router = useRouter();
const productSlug = route.params.slug;

const product = products.find((product) => product.slug === productSlug);

if (typeof product === "undefined") throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true });

const { addItemToCart } = useCartStore();
const count = ref(1);

const goBack = () => {
	router.back();
};

const addToCart = () => {
	addItemToCart({ productId: product.id, count: count.value });
	count.value = 1;
};
</script>

<template>
	<div class="product-page">
		<div class="container">
			<div class="product-page__content flex flex-column">
				<div class="product-page__header flex flex-column items-start">
					<button class="product-page__back body-regular text-black-light weight-500" @click="goBack">Go back</button>
					<div class="product-page__product flex items-center">
						<ProductItemImage :product="product" usage="product" />
						<div class="product-page__text">
							<ProductItemName :product="product" usage="product" />
							<h3 class="product-page__price heading-6 font-weight-700">$ {{ Number(product.price).toLocaleString() }}</h3>
							<div class="product-page__add flex gap-16">
								<ProductAddToCart :count="count" :update-state="false" usage="product" @increase-count="count += 1" @decrese-count="count -= 1" />
								<BaseButton @click="addToCart">add to cart</BaseButton>
							</div>
						</div>
					</div>
				</div>
				<div class="product-page__features flex">
					<div class="product-page__feature flex flex-column">
						<h3 class="heading-3 weight-700 text-uppercase">features</h3>
						<p class="text-black-light body-regular weight-500" v-html="product.features"></p>
					</div>
					<div class="product-page__box flex flex-column">
						<h3 class="heading-3 weight-700 text-uppercase">in the box</h3>
						<ul class="flex flex-column gap-8">
							<li v-for="item in product.includes" :key="item.item" class="body-regular flex items-center">
								<span class="weight-700 text-primary">{{ item.quantity }}X</span>
								<span class="weight-500 text-black-light">{{ item.item }}</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="product-page__gallery grid">
					<div class="first br-8">
						<img :src="product.gallery.first.mobile" :alt="`${product.name} image`" class="mobile-image img-fluid" />
						<img :src="product.gallery.first.desktop" :alt="`${product.name} image`" class="desktop-image img-fluid" />
					</div>
					<div class="second br-8">
						<img :src="product.gallery.second.mobile" :alt="`${product.name} image`" class="mobile-image img-fluid" />
						<img :src="product.gallery.second.desktop" :alt="`${product.name} image`" class="desktop-image img-fluid" />
					</div>
					<div class="third br-8">
						<img :src="product.gallery.third.mobile" :alt="`${product.name}  image`" class="mobile-image img-fluid" />
						<img :src="product.gallery.third.desktop" :alt="`${product.name}  image`" class="desktop-image img-fluid" />
					</div>
				</div>
				<div class="product-page__others"></div>
			</div>
			<CategoriesList />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.product-page {
	padding-top: 8rem;

	&__content {
		@include gap(16rem);
	}

	&__header {
		@include gap(5.6rem);
	}

	&__product {
		@include gap(3.2rem 7rem, 7rem, 12.5rem);
		flex-direction: column;
		width: 100%;

		@media screen and (min-width: $tablet) {
			flex-direction: row;
		}
	}

	&__price {
		margin: 2.4rem 0 3.1rem;

		@media screen and (min-width: $tablet) {
			margin: 3.2rem 0 3.1rem;
		}

		@media screen and (min-width: $desktop) {
			margin: 3.2rem 0 4.7rem;
		}
	}

	&__features {
		@include gap(8.8rem, 12rem, 12.5rem);
		flex-direction: column;

		@media screen and (min-width: $desktop) {
			flex-direction: row;
		}

		& > div {
			@include gap(2.4rem, 2.4rem, 3.2rem);
		}
	}

	&__feature {
		@media screen and (min-width: $desktop) {
			max-width: 63.5rem;
		}
	}

	&__box {
		max-width: 35rem;

		li {
			@include gap(2.1rem, 2.1rem, 2.4rem);
		}
	}

	&__gallery {
		@include gap(2rem, 2rem 1.8rem, 3.2rem 3rem);
		grid-template-rows: repeat(4, 17.4rem);

		@media screen and (min-width: $tablet) {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 17.4rem);
		}

		@media screen and (min-width: $desktop) {
			grid-template-rows: 28rem 28rem;
		}

		div {
			overflow: hidden;
		}

		& > div:nth-child(3) {
			grid-row: 3 / span 2;
			// grid-column: 1 / span 2;

			@media screen and (min-width: $tablet) {
				grid-row: 1 / span 2;
				grid-column: 2 / span 2;
			}
		}

		img {
			width: 100%;
			height: 100%;
			// object-fit: 50%;
			object-fit: cover;
			// object-position: top;
		}
	}
}
</style>
