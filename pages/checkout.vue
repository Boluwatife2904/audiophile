<script setup lang="ts">
const router = useRouter();
const { setCurrentModal } = useStore();
const { cartGrandTotal } = storeToRefs(useCartStore());

const checkoutForm: Record<string, string> = reactive({
	name: "",
	email: "",
	phoneNumber: "",
	address: "",
	zipCode: "",
	city: "",
	country: "",
	paymentMethod: "",
});

const billingInputs = [
	{ id: "name", label: "Name", placeholder: "Alexei Ward" },
	{ id: "email", label: "Email", placeholder: "alexei@mail.com" },
	{ id: "phoneNumber", label: "Phone Number", placeholder: "+1 202-555-0136" },
];

const shippingInputs = [
	{ id: "address", label: "Address", placeholder: "1137 Williams Avenue" },
	{ id: "zipCode", label: "Zip Code", placeholder: "10001" },
	{ id: "city", label: "City", placeholder: "New York" },
	{ id: "country", label: "Country", placeholder: "United States" },
];

const goBack = () => {
	router.back();
};
</script>

<template>
	<div class="checkout-page">
		<div class="container flex flex-column items-start">
			<button class="body-regular text-black-light weight-500 checkout-page__back" @click="goBack">Go back</button>
			<div class="checkout-page__content grid items-start">
				<div class="checkout-page__form bg-white br-8">
					<h3 class="heading-3 text-uppercase weight-700 checkout-page__title">checkout</h3>
					<section class="billing-details flex flex-column gap-16">
						<p class="body-subtitle text-primary text-uppercase weight-700">billing details</p>
						<div class="inputs__row">
							<BaseInput v-for="input in billingInputs" v-model="checkoutForm[input.id]" :id="input.id" :name="input.id" :label="input.label" :placeholder="input.placeholder" />
						</div>
					</section>
					<section class="shipping-info flex flex-column gap-16">
						<p class="body-subtitle text-primary text-uppercase weight-700">shipping info</p>
						<div class="inputs__row">
							<BaseInput v-for="input in shippingInputs" v-model="checkoutForm[input.id]" :id="input.id" :name="input.id" :label="input.label" :placeholder="input.placeholder" />
						</div>
					</section>
					<section class="payment-details flex flex-column gap-16">
						<p class="body-subtitle text-primary text-uppercase weight-700">payment details</p>
						<div class="inputs flex items-start flex-column">
							<div class="inputs__row">
								<p class="text-black weight-700">Payment Method</p>
								<div class="flex flex-column gap-16">
									<BaseRadio id="eMoney" v-model="checkoutForm.paymentMethod" value="eMoney" name="paymentMethod" label="e-Money" />
									<BaseRadio id="cod" v-model="checkoutForm.paymentMethod" value="cod" name="paymentMethod" label="Cash on Delivery" />
								</div>
								<template v-if="checkoutForm.paymentMethod === 'eMoney'">
									<BaseInput id="eMoneyNumber" name="eMoneyNumber" label="e-Money Number" placeholder="238521993" />
									<BaseInput id="eMoneyPIN" name="eMoneyPIN" label="e-Money PIN" placeholder="6891" />
								</template>
							</div>
						</div>
					</section>
				</div>
				<div class="checkout-page__summary bg-white br-8 flex flex-column">
					<div class="flex flex-column gap-24">
						<CartList usage="checkout" />
						<p class="flex content-between">
							<span class="text-black-light body-regular weight-500 text-uppercase">grand total</span>
							<span class="text-primary weight-700 heading-6">$ {{ formatPriceWithCommas(cartGrandTotal) }}</span>
						</p>
					</div>
					<BaseButton size="full" @click="setCurrentModal('order')">continue & pay</BaseButton>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.checkout-page {
	@include padding(1.6rem 0 9.7rem, 4.8rem 0 11.6rem, 7.9rem 0 14.1rem);

	.container {
		@include gap(2.4rem, 2.4rem, 3.8rem);
	}

	&__back:hover {
		color: $primary !important;
	}

	&__title {
		@include margin-bottom(3.2rem, 4.1rem);
	}

	&__content {
		@include gap(3.2rem, 3.2rem, 3rem);
		width: 100%;

		@media screen and (min-width: $desktop) {
			grid-template-columns: auto 35rem;
		}
	}

	&__form {
		@include padding(2.4rem, 3rem 2.8rem, 5.4rem 4.8rem);
	}

	&__summary {
		padding: 3.2rem 3.3rem;
		@include gap(3.2rem);
	}
}

.inputs {
	@include gap(2.4rem);

	& > * {
		width: 100%;
	}

	&__row {
		display: grid;
		@include gap(2.4rem 1.6rem);

		@media screen and (min-width: $tablet) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
}

.billing-details {
	@include margin-bottom(3.2rem, 5.3rem);
}

.shipping-info {
	@include margin-bottom(3.2rem, 6.1rem);

	.inputs__row {
		& > :first-child {
			@media screen and (min-width: $tablet) {
				grid-column: span 2;
			}
		}
	}
}

.payment-details {
	p {
		@include typography(1.2rem, normal);
		letter-spacing: -0.0214rem;
	}
}
</style>
