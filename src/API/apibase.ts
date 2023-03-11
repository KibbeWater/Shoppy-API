import { AxiosInstance } from 'axios';

export default class ApiBase {
    /* api: AxiosInstance & { apiVersion: number };

	constructor(api: AxiosInstance) {
		const transformedApi = api as AxiosInstance & { apiVersion: number };
		transformedApi.apiVersion = 1;
		transformedApi.interceptors.request.use((config) => {
			if (!config.url?.startsWith('/v')) config.url = `/v${transformedApi.apiVersion}${config.url}`;
			return config;
		});

		this.api = transformedApi;
	} */

    api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    protected _getPageInformation(endpoint: string): Promise<PagesResult> {
        return new Promise((resolve, reject) => {
            this.api
                .get(endpoint)
                .then((res) =>
                    resolve({
                        totalPages: parseInt(res.headers['x-total-pages'] || '', 10) || -1,
                        page: parseInt(res.headers['x-current-page'] || '', 10) || -1,
                        itemsPerPage: parseInt(res.headers['x-items-per-page'] || '', 10) || -1,
                    })
                )
                .catch(reject);
        });
    }
}
