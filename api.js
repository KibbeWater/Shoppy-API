const http = require('./http');

class Orders {
	/**
	 * Initialize a new Shoppy API Order Object
	 * @param {http} api Shoppy API http object
	 */
	constructor(api) {
		this.api = api;
	}

	/**
	 * Get all orders (max 25)
	 * @param {?number} page Optional parameter for pagination, defaults to 1
	 * @returns {Promise<Array<OrderObject>>}
	 */
	all(page) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			let usedPage = page || 1;
			apiObj.get(`/api/v1/orders?page=${usedPage}`).then(resolve).catch(reject);
		});
	}

	/**
	 * Get a specific order
	 * @param {!string} ID The order ID to search for
	 * @returns {Promise<OrderObject>}
	 */
	get(ID) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			apiObj.get(`/api/v1/orders/${ID}`).then(resolve).catch(reject);
		});
	}
}

class Products {
	/**
	 * Initialize a new Shoppy API Products Object
	 * @param {http} api Shoppy API http object
	 */
	constructor(api) {
		this.api = api;
	}

	/**
	 * Get all products (max 25)
	 * @param {?number} page Optional parameter for pagination, defaults to 1
	 * @returns {Promise<Array<ProductObject>>}
	 */
	all(page) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			let usedPage = page || 1;
			apiObj.get(`/api/v1/products?page=${usedPage}`).then(resolve).catch(reject);
		});
	}

	/**
	 * Get a specific product
	 * @param {!string} ID The order ID to search for
	 * @returns {Promise<ProductObject>}
	 */
	get(ID) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			apiObj.get(`/api/v1/products/${ID}`).then(resolve).catch(reject);
		});
	}

	/**
	 * Creates a new product
	 * @param {CreateProductParams} options
	 * @returns {Promise<Object>}
	 */
	create(options) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			apiObj.put(`/api/v1/products/`, options).then(resolve).catch(reject);
		});
	}

	/**
	 * Updates a product
	 * @param {string} ID The ID of the product to be updated
	 * @param {CreateProductParams} options The settings to be modified
	 * @returns {Promise<Object>}
	 */
	update(ID, options) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			apiObj.post(`/api/v1/products/${ID}`, options).then(resolve).catch(reject);
		});
	}

	/**
	 * Deletes a product
	 * @param {string} ID The ID of the product to be deleted
	 * @returns {Promise<Object>}
	 */
	delete(ID) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			apiObj.delete(`/api/v1/products/${ID}`).then(resolve).catch(reject);
		});
	}
}

class Feedback {
	/**
	 * Initialize a new Shoppy API Feedback Object
	 * @param {http} api Shoppy API http object
	 */
	constructor(api) {
		this.api = api;
	}

	/**
	 * Get all feedback (max 25)
	 * @param {?number} page Optional parameter for pagination, defaults to 1
	 * @returns {Promise<Array<FeedbackObject>>}
	 */
	all(page) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			let usedPage = page || 1;
			apiObj.get(`/api/v1/feedbacks?page=${usedPage}`).then(resolve).catch(reject);
		});
	}

	/**
	 * Get a specific feedback
	 * @param {!string} ID The order ID to search for
	 * @returns {Promise<FeedbackObject>}
	 */
	get(ID) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			apiObj.get(`/api/v1/feedbacks/${ID}`).then(resolve).catch(reject);
		});
	}
}

class Queries {
	/**
	 * Initialize a new Shoppy API Query Object
	 * @param {http} api Shoppy API http object
	 */
	constructor(api) {
		this.api = api;
	}

	/**
	 * Get all queries (max 25)
	 * @param {?number} page Optional parameter for pagination, defaults to 1
	 * @returns {Promise<Array<QueryObject>>}
	 */
	all(page) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			let usedPage = page || 1;
			apiObj.get(`/api/v1/queries?page=${usedPage}`).then(resolve).catch(reject);
		});
	}

	/**
	 * Get a specific query
	 * @param {!string} ID The order ID to search for
	 * @returns {Promise<QueryObject>}
	 */
	get(ID) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			apiObj.get(`/api/v1/queries/${ID}`).then(resolve).catch(reject);
		});
	}

	/**
	 * Updates a query
	 * @param {!string} ID
	 * @param {?('close'|'reopen')} action
	 * @returns {Promise<Object>}
	 */
	update(ID, action) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			apiObj.post(`/api/v1/queries/${ID}/${action}`, {}).then(resolve).catch(reject);
		});
	}

	/**
	 * Replies a query
	 * @param {!string} ID
	 * @param {string} message
	 * @returns {Promise<Object>}
	 */
	update(ID, message) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			apiObj
				.post(`/api/v1/queries/${ID}/reply`, { message: message })
				.then(resolve)
				.catch(reject);
		});
	}
}

class PayV2 {
	/**
	 * Initialize a new Shoppy API PayV2 Object
	 * @param {http} api Shoppy API http object
	 */
	constructor(api) {
		this.api = api;
	}

	/**
	 * Create a simple payment that will return a URL for users to complete payment
	 * @param {string} title Order title
	 * @param {number} value The price of your product
	 * @returns {PayV2Object}
	 */
	simple(title, value) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			apiObj.post(`/api/v2/pay`, { title: title, value: value }).then(resolve).catch(reject);
		});
	}

	/**
	 * Create a advanced payment to develop and integrate your own checkout experience
	 * @param {PayV2Request} options Options to create the new order object
	 */
	raw(options) {
		let apiObj = this.api;
		return new Promise((resolve, reject) => {
			apiObj.post(`/api/v2/pay`, options).then(resolve).catch(reject);
		});
	}
}

/**
 * Shoppy API wrapper
 */
module.exports = class ShoppyAPI {
	/**
	 * Initialize a new Shoppy API object
	 * @param {string} apiKey Your Shoppy API key
	 */
	constructor(apiKey) {
		this.api = new http(apiKey);

		this.orders = new Orders(this.api);
		this.products = new Products(this.api);
		this.feedback = new Feedback(this.api);
		this.queries = new Queries(this.api);
		this.pay = new PayV2(this.api);
	}
};
