import { AxiosInstance } from 'axios';

export default class ApiBase {
	api: AxiosInstance & { apiVersion: number };

	constructor(api: AxiosInstance) {
		const transformedApi = api as AxiosInstance & { apiVersion: number };
		transformedApi.apiVersion = 1;
		transformedApi.interceptors.request.use((config) => {
			config.url = `/v${transformedApi.apiVersion}${config.url}`;
			return config;
		});

		this.api = transformedApi;
	}

	protected _getPageInformation(endpoint: string): Promise<PagesResult> {
		return new Promise((resolve, reject) => {
			this.api
				.get(endpoint)
				.then((res) =>
					resolve({
						totalPages: parseInt(res.headers['x-total-pages'] || '') || -1,
						page: parseInt(res.headers['x-current-page'] || '') || -1,
						itemsPerPage: parseInt(res.headers['x-items-per-page'] || '') || -1,
					})
				)
				.catch(reject);
		});
	}
}
