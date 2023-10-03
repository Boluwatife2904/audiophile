interface Product {
	id: number;
	slug: string;
	name: string;
	shortName: string;
	image: {
		mobile: string;
		desktop: string;
	};
	category: string;
	new: boolean;
	price: number;
	description: string;
	features: string;
	includes: { quantity: number; item: string }[];
	gallery: {
		first: {
			mobile: string;
			desktop: string;
		};
		second: {
			mobile: string;
			desktop: string;
		};
		third: {
			mobile: string;
			desktop: string;
		};
	};
	others: {
		slug: string;
		name: string;
		image: {
			mobile: string;
			tablet: string;
			desktop: string;
		};
	}[];
}
