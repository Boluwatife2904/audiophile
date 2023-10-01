interface ShippingData {
	address: string;
	zipCode: string;
	city: string;
	country: string;
}

interface UserData {
	name: string;
	email: string;
	phoneNumber: number;
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
	paymentData: PaymentData
}
