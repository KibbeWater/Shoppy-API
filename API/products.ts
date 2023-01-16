import ApiBase from './apibase';

export class Products extends ApiBase {
	/**
	 * Get all products (max 25)
	 */
	all(page: number = 1): Promise<Product[]> {
		return new Promise((resolve, reject) =>
			this.api
				.get<Product[]>(`/products?page=${page || 1}`)
				.then((res) => resolve(res.data))
				.catch(reject)
		);
	}

	/**
	 * Get a specific product
	 */
	get(id: string): Promise<Product> {
		return new Promise((resolve, reject) => {
			this.api
				.get<Product>(`/products/${id}`)
				.then((res) => resolve(res.data))
				.catch(reject);
		});
	}

	/**
	 * Creates a new product
	 */
	create(options: CreateProductParams): Promise<Product> {
		return new Promise((resolve, reject) => {
			this.api
				.put<Product>(`/products/`, options)
				.then((res) => resolve(res.data))
				.catch(reject);
		});
	}

	/**
	 * Updates a product
	 */
	update(id: string, options: UpdateProductParams) {
		return new Promise((resolve, reject) => {
			this.api
				.post<Product>(`/products/${id}`, options)
				.then((res) => resolve(res.data))
				.catch(reject);
		});
	}

	/**
	 * Deletes a product
	 */
	delete(id): Promise<void> {
		return new Promise((resolve, reject) => {
			this.api
				.delete(`/products/${id}`)
				.then(() => resolve())
				.catch(reject);
		});
	}

	/**
	 * Gets the pages information of orders
	 */
	pages(): Promise<PagesResult> {
		return new Promise((resolve, reject) => this._getPageInformation('/products').then(resolve).catch(reject));
	}
}
