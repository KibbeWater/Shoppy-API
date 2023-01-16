import ApiBase from './apibase';

export class Queries extends ApiBase {
	/**
	 * Get all queries / order per page 25
	 */
	all(page: number = 1): Promise<Query[]> {
		return new Promise((resolve, reject) => {
			this.api
				.get<Query[]>(`/v1/queries?page=${page || 1}`)
				.then((res) => resolve(res.data))
				.catch(reject);
		});
	}

	/**
	 * Get a specific query
	 */
	get(id: string): Promise<Query> {
		return new Promise((resolve, reject) => {
			this.api
				.get<Query>(`/v1/queries/${id}`)
				.then((res) => resolve(res.data))
				.catch(reject);
		});
	}

	/**
	 * Updates a query
	 */
	update(id: string, action: 'close' | 'reopen'): Promise<Query> {
		return new Promise((resolve, reject) => {
			this.api
				.post<Query>(`/v1/queries/${id}/${action}`, {})
				.then((res) => resolve(res.data))
				.catch(reject);
		});
	}

	/**
	 * Replies a query
	 */
	reply(id: string, message: string): Promise<Query> {
		return new Promise((resolve, reject) => {
			this.api
				.post<Query>(`/v1/queries/${id}/reply`, { message: message })
				.then((res) => resolve(res.data))
				.catch(reject);
		});
	}

	/**
	 * Gets the pages information of orders
	 */
	pages(): Promise<PagesResult> {
		return new Promise((resolve, reject) => this._getPageInformation('/v1/queries').then(resolve).catch(reject));
	}
}
