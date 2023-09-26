export const formatPriceWithCommas = (price: string | number) => {
	return Number(price).toLocaleString()
}