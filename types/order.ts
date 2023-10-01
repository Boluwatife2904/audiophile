interface ShippingData {
	address: string;
	zipCode: string;
	city: string;
	country: string;
}

interface UserData {
	name: string;
	email: string;
	phoneNumber: string;
}

interface PaymentData {
	method: string,
	card?: string;
	pin?: string;
}

interface Order {
	orderId: number;
	dateBought: Date;
	orderItems: CartProduct[];
	shippingData: ShippingData,
	userData: UserData,
	paymentData: PaymentData,
	total: number,
	shipping: number,
	vat: number,
	grandTotal: number,
}
