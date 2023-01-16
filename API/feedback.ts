import ApiBase from './apibase';

export class Feedback extends ApiBase {
	/**
	 * Get all feedback (max 25)
	 * @param {?number} page Optional parameter for pagination, defaults to 1
	 * @returns {Promise<Array<FeedbackObject>>}
	 */
	all(page: number = 1): Promise<Feedback[]> {
		return new Promise((resolve, reject) => {
			this.api
				.get<Feedback[]>(`/feedbacks?page=${page || 1}`)
				.then((res) => resolve(res.data))
				.catch(reject);
		});
	}

	/**
	 * Get a specific feedback
	 * @param {!string} ID The order ID to search for
	 * @returns {Promise<FeedbackObject>}
	 */
	get(ID): Promise<Feedback> {
		return new Promise((resolve, reject) => {
			this.api
				.get<Feedback>(`/feedbacks/${ID}`)
				.then((res) => resolve(res.data))
				.catch(reject);
		});
	}

	/**
	 * Gets the pages information of orders
	 * @returns {Promise<PagesResult>}
	 */
	pages() {
		return new Promise((resolve, reject) => this._getPageInformation('/feedbacks').then(resolve).catch(reject));
	}
}
