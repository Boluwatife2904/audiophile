<script setup lang="ts">
useSeoMeta({
	title: "Audiophile | Checkout"
})
import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf, email } from "@vuelidate/validators";

const router = useRouter();
const { setCurrentModal } = useStore();
const { setOrderData } = useOrderStore();
const { cartTotal, cartVAT, cartGrandTotal, cartItems, cartProducts } = storeToRefs(useCartStore());

const checkoutForm: Record<string, string> = reactive({
	name: "",
	email: "",
	phoneNumber: "",
	address: "",
	zipCode: "",
	city: "",
	country: "",
	paymentMethod: "",
	paymentCard: "",
	paymentPin: "",
});

const rules = {
	name: { required },
	email: { required, email },
	phoneNumber: { required },
	address: { required },
	zipCode: { required },
	city: { required },
	country: { required },
	paymentMethod: { required },
	paymentCard: {
		requiredIf: requiredIf(function () {
			return checkoutForm.paymentMethod === "eMoney";
		}),
	},
	paymentPin: {
		requiredIf: requiredIf(function () {
			return checkoutForm.paymentMethod === "eMoney";
		}),
	},
};

const v$ = useVuelidate(rules, checkoutForm, { $autoDirty: true });

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

const createOrder = () => {
	const userData = {
		name: checkoutForm.name,
		email: checkoutForm.email,
		phoneNumber: checkoutForm.phoneNumber,
	};
	const shippingData = {
		address: checkoutForm.address,
		zipCode: checkoutForm.zipCode,
		city: checkoutForm.city,
		country: checkoutForm.country,
	};
	const paymentData = {
		method: checkoutForm.paymentMethod,
		...(checkoutForm.payment === "eMoney" && { card: checkoutForm.paymentCard, pin: checkoutForm.paymentPin }),
	};
	const order = {
		orderId: Math.floor(Math.random() * 10000000000),
		dateBought: new Date(),
		orderItems: cartProducts.value,
		userData,
		shippingData,
		total: cartTotal.value,
		shipping: 50,
		vat: cartVAT.value,
		grandTotal: cartGrandTotal.value,
		paymentData,
	};
	setOrderData(order);
	setCurrentModal("order");
};
</script>

<template>
	<div class="checkout-page">
		<div class="container flex flex-column items-start">
			<button class="body-regular text-black-light weight-500 checkout-page__back" title="Go back" @click="goBack">Go back</button>
			<div class="checkout-page__content grid items-start">
				<div class="checkout-page__form bg-white br-8">
					<h3 class="heading-3 text-uppercase weight-700 checkout-page__title">checkout</h3>
					<section class="billing-details flex flex-column gap-16">
						<p class="body-subtitle text-primary text-uppercase weight-700">billing details</p>
						<div class="inputs__row">
							<BaseInput v-for="input in billingInputs" v-model="checkoutForm[input.id]" :id="input.id" :name="input.id" :label="input.label" :placeholder="input.placeholder" :is-invalid="v$[input.id].$error" />
						</div>
					</section>
					<section class="shipping-info flex flex-column gap-16">
						<p class="body-subtitle text-primary text-uppercase weight-700">shipping info</p>
						<div class="inputs__row">
							<BaseInput v-for="input in shippingInputs" v-model="checkoutForm[input.id]" :id="input.id" :name="input.id" :label="input.label" :placeholder="input.placeholder" :is-invalid="v$[input.id].$error" />
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
							</div>
						</div>
					</section>
					<KeepAlive>
						<div v-if="checkoutForm.paymentMethod" class="payment-details__extra">
							<div class="inputs__row payment-details__emoney" v-if="checkoutForm.paymentMethod === 'eMoney'">
								<BaseInput v-model="checkoutForm.paymentCard" id="eMoneyNumber" name="eMoneyNumber" label="e-Money Number" placeholder="238521993" />
								<BaseInput v-model="checkoutForm.paymentPin" id="eMoneyPIN" name="eMoneyPIN" label="e-Money PIN" placeholder="6891" />
							</div>
							<div v-else-if="checkoutForm.paymentMethod === 'cod'" class="cod-info flex items-center flex-wrap">
								<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
										fill="#D87D4A" />
								</svg>
								<span class="body-regular block">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</span>
							</div>
						</div>
					</KeepAlive>
				</div>
				<div class="checkout-page__summary bg-white br-8 flex flex-column">
					<div class="flex flex-column gap-24">
						<CartList usage="checkout" />
						<p v-if="cartItems.length > 0" class="flex content-between">
							<span class="text-black-light body-regular weight-500 text-uppercase">grand total</span>
							<span class="text-primary weight-700 heading-6">$ {{ formatPriceWithCommas(cartGrandTotal) }}</span>
						</p>
					</div>
					<BaseButton v-if="cartItems.length > 0" size="full" :disabled="v$.$invalid" @click="createOrder">continue & pay</BaseButton>
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

	&__emoney {
		margin-top: 2.4rem;
	}
}

.cod-info {
	@include gap(2.4rem, 3.2rem);
	margin-top: 3rem;

	svg {
		flex-shrink: 0;
	}

	span {
		color: rgba(0, 0, 0, 0.5);
		max-width: 51.4rem;
	}
}
</style>
