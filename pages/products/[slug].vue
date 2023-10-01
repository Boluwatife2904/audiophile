<script setup lang="ts">
import products from "@/data/products.json";
const route = useRoute();
const router = useRouter();
const productSlug = route.params.slug;

const product = products.find((product) => product.slug === productSlug) as Product;

if (typeof product === "undefined") throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true });

const { addItemToCart } = useCartStore();
const count = ref(1);
const haveAddedToCart = ref(false);

const goBack = () => {
	router.back();
};

const addToCart = () => {
	haveAddedToCart.value = true;
	addItemToCart({ productId: product.id, count: count.value });
	count.value = 1;
	setTimeout(() => {
		haveAddedToCart.value = false;
	}, 1000);
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
								<BaseButton :disabled="haveAddedToCart" @click="addToCart">{{ haveAddedToCart ? "added to cart" : "add to cart" }}</BaseButton>
							</div>
						</div>
					</div>
				</div>
				<div class="product-page__features flex">
					<div class="product-page__feature flex flex-column">
						<h3 class="heading-3 weight-700 text-uppercase">features</h3>
						<p class="text-black-light body-regular weight-500" v-html="product.features"></p>
					</div>
					<div class="product-page__box flex">
						<h3 class="heading-3 weight-700 text-uppercase">in the box</h3>
						<ul class="flex flex-column gap-8">
							<li v-for="item in product.includes" :key="item.item" class="body-regular flex items-center">
								<span class="weight-700 text-primary">{{ item.quantity }}X</span>
								<span class="weight-500 text-black-light">{{ item.item }}</span>
							</li>
						</ul>
					</div>
				</div>
				<ProductItemGallery :product="product" />
				<div class="product-page__also-like">
					<div class="product-page__also-like__header">
						<h3 class="heading-3 text-uppercase text-center weight-700">you may also like</h3>
						<div class="product-page__also-like__grid grid">
							<ProductAlsoLike v-for="item in product.others" :key="item.slug" :product="item" />
						</div>
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
	@include padding(1.6rem 0 0, 3.3rem 0 0, 8rem 0 0);

	&__content {
		@include gap(16rem);
	}

	&__header {
		@include gap(2.4rem, 2.4rem, 5.6rem);
	}

	&__product {
		@include flex-direction(column, row);
		@include gap(3.2rem 7rem, 7rem, 12.5rem);
		width: 100%;
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
		@include flex-direction(column, column, row);

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
		@include flex-direction(column, row, column);

		& > * {
			flex: 1;
			@media screen and (min-width: $desktop) {
				flex: initial;
			}
		}

		@media screen and (min-width: $desktop) {
			max-width: 35rem;
		}

		li {
			@include gap(2.1rem, 2.1rem, 2.4rem);
		}
	}

	&__also-like {
		h3 {
			@include margin-bottom(4rem, 5.6rem, 6.4rem);
		}

		&__grid {
			@include gap(5.6rem 1.1rem, 5.6rem 1.1rem, 3rem);
			grid-template-columns: repeat(auto-fit, minmax(22.3rem, 1fr));
		}
	}
}
</style>
