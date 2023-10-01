import products from "@/data/products.json";

export const useCartStore = defineStore("cartStore", () => {
	const cartItems = ref<Cart[]>([]);

	const cartProducts = computed<CartProduct[]>(() => {
		return cartItems.value.map((item) => {
			const product = products.find((product) => product.id === item.productId) as Product;
			return { ...item, ...product };
		});
	});

	const cartTotal = computed(() => {
		return cartProducts.value.reduce((accumulator, current) => {
			return accumulator + current.price * current.count;
		}, 0);
	});

	const cartVAT = computed(() => {
		return Math.floor(0.2 * cartTotal.value);
	});

	const cartGrandTotal = computed(() => {
		return cartTotal.value + 50 + cartVAT.value;
	});

	const addItemToCart = (payload: CartPayload) => {
		const cartItem = cartItems.value.find((item) => item.productId === payload.productId);
		if (cartItem) {
			cartItem.count = cartItem.count + payload.count;
		} else {
			cartItems.value.push(payload);
		}
	};

	const reduceItemCountInCart = (productId: number) => {
		const item = cartItems.value.find((item) => item.productId === productId);
		if (item) {
			item.count -= 1;
			if (item.count < 1) removeItemFromCart(productId);
		}
	};

	const removeItemFromCart = (prodctId: number) => {
		cartItems.value = cartItems.value.filter((item) => item.productId !== prodctId);
	};

	const clearCart = () => {
		cartItems.value = [];
	};

	return { cartItems, addItemToCart, removeItemFromCart, clearCart, cartProducts, cartTotal, reduceItemCountInCart, cartGrandTotal, cartVAT };
});
