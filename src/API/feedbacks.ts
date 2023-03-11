import ApiBase from './apibase';

export class Feedbacks extends ApiBase {
    /**
     * Get all feedback (max 25)
     */
    all(page: number = 1): Promise<Feedback[]> {
        return new Promise((resolve, reject) => {
            this.api
                .get<Feedback[]>(`/v1/feedbacks?page=${page || 1}`)
                .then((res) => resolve(res.data))
                .catch(reject);
        });
    }

    /**
     * Get a specific feedback
     */
    get(id: string): Promise<Feedback> {
        return new Promise((resolve, reject) => {
            this.api
                .get<Feedback>(`/v1/feedbacks/${id}`)
                .then((res) => resolve(res.data))
                .catch(reject);
        });
    }

    /**
     * Gets the pages information of orders
     */
    pages(): Promise<PagesResult> {
        return new Promise((resolve, reject) => this._getPageInformation('/v1/feedbacks').then(resolve).catch(reject));
    }
}
