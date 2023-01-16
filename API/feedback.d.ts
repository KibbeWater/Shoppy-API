type Feedback = {
	id: string;
	order_id: string;
	comment: string;
	stars: number;
	rating: number;
	response: string;
	created_at: string;
	updated_at: string;
	product: {
		id: string;
		title: string;
	};
};
