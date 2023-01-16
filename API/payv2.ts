import { AxiosInstance } from 'axios';

import ApiBase from './apibase';

export class PayV2 extends ApiBase {
	constructor(api: AxiosInstance) {
		super(api);
		this.api.apiVersion = 2;
	}

	/**
	 * Create a simple payment that will return a URL for users to complete payment
	 */
	simple(title, value): Promise<PayV2Response> {
		return new Promise((resolve, reject) => {
			this.api
				.post<PayV2Response>(`/pay`, { title: title, value: value })
				.then((res) => {
					resolve(res.data);
				})
				.catch(reject);
		});
	}

	/**
	 * Create a payment that will return a URL for users to complete payment
	 * This API is mostly undocumented, use at your own risk
	 */
	raw(options: PayV2Request): Promise<any> {
		return new Promise((resolve, reject) => {
			this.api
				.post(`/pay`, options)
				.then((res) => {
					resolve(res.data);
				})
				.catch(reject);
		});
	}
}
