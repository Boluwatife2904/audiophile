interface Cart {
	productId: number;
	count: number;
}

interface CartPayload {
	productId: number;
	count: number;
}

interface CartProduct extends Product, Cart {
	
}

