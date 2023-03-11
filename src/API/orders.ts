import ApiBase from './apibase';

export class Orders extends ApiBase {
    all(page: number = 1): Promise<Order[]> {
        return new Promise((resolve, reject) => {
            this.api
                .get<Order[]>(`/v1/orders?page=${page}`)
                .then((res) => resolve(res.data))
                .catch(reject);
        });
    }

    get(id: string): Promise<Order> {
        return new Promise((resolve, reject) => {
            this.api
                .get<Order>(`/v1/orders/${id}`)
                .then((res) => resolve(res.data))
                .catch(reject);
        });
    }

    pages(): Promise<PagesResult> {
        return new Promise((resolve, reject) => this._getPageInformation('/v1/orders').then(resolve).catch(reject));
    }
}