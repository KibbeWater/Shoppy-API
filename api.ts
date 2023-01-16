import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Feedbacks } from './API/feedbacks';
import { Orders } from './API/Orders';
import { PayV2 } from './API/payv2';
import { Products } from './API/products';
import { Queries } from './API/queries';

const SHOPPY_URL = 'https://shoppy.gg/api';

export default class ShoppyAPI {
	api: AxiosInstance;

	orders: Orders;
	products: Products;
	feedbacks: Feedbacks;
	queries: Queries;
	pay: PayV2;

	constructor(apiKey?: string) {
		const API_KEY = apiKey || process.env.SHOPPY_API_KEY;

		if (!API_KEY) throw new Error('No API key provided');

		this.api = axios.create({
			baseURL: SHOPPY_URL,
			headers: {
				Authorization: API_KEY,
			},
		});

		this.orders = new Orders(this.api);
		this.products = new Products(this.api);
		this.feedbacks = new Feedbacks(this.api);
		this.queries = new Queries(this.api);
		this.pay = new PayV2(this.api);
	}
}
