export const useOrderStore = defineStore("orderStore", () => {
	const orderData = reactive<Order>({} as Order);

	const setOrderData = (data: Order) => {
		Object.assign(orderData, { ...data });
	};

	return { orderData, setOrderData };
});
