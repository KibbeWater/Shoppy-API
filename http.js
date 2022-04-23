'use strict';

const fetch = require('node-fetch');

const shoppyURL = 'https://shoppy.gg';

/**
 * Class for making more simplified calls to the shoppy API
 */
module.exports = class http {
	/**
	 * Initializes a new HTTP object
	 * @param {string} apiKey Sets the API key to be used when talking to the shoppy API
	 */
	constructor(apiKey) {
		this.apiKey = apiKey;
	}

	/**
	 * HTTP Get request
	 * @param {string} endpoint The API endpoint to send the request to
	 * @returns {Promise<Object>} Result of the HTTP GET request
	 */
	get(endpoint) {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(`${shoppyURL}${endpoint}`, {
					headers: {
						Authorization: this.apiKey,
					},
				});
				const json = res.json();
				resolve(json);
			} catch (e) {
				reject(e);
			}
		});
	}

	/**
	 * HTTP Post request
	 * @param {string} endpoint The API endpoint to send the request to
	 * @param {Object} payload The JSON payload to be sent
	 * @returns {Promise<Object>} Result of the HTTP POST request
	 */
	post(endpoint, payload) {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(`${shoppyURL}${endpoint}`, {
					method: 'POST',
					headers: {
						Authorization: this.apiKey,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(payload),
				});
				const json = res.json();
				resolve(json);
			} catch (e) {
				reject(e);
			}
		});
	}

	/**
	 * HTTP Put request
	 * @param {string} endpoint The API endpoint to send the request to
	 * @param {Object} payload The JSON payload to be sent
	 * @returns {Promise<Object>} Result of the HTTP PUT request
	 */
	put(endpoint, payload) {
		return new Promise(async (resolve, reject) => {
			try {
				await fetch(`${shoppyURL}${endpoint}`, {
					method: 'PUT',
					headers: {
						Authorization: this.apiKey,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(payload),
				});
				resolve();
			} catch (e) {
				reject(e);
			}
		});
	}

	/**
	 * HTTP Delete request
	 * @param {string} endpoint The API endpoint to send the request to
	 */
	delete(endpoint) {
		return new Promise(async (resolve, reject) => {
			try {
				await fetch(`${shoppyURL}${endpoint}`, {
					method: 'DELETE',
					headers: {
						Authorization: this.apiKey,
					},
				});
				resolve();
			} catch (e) {
				reject(e);
			}
		});
	}

	/**
	 * Get the raw HTTP response
	 * @param {string} endpoint The API endpoint to send the request to
	 * @param {?*} options Custom HTTP options
	 * @returns {Promise<Object>}
	 */
	raw(endpoint, options) {
		return new Promise(async (resolve, reject) => {
			try {
				resolve(
					await fetch(`${shoppyURL}${endpoint}`, {
						headers: {
							Authorization: this.apiKey,
						},
					})
				);
			} catch (e) {
				reject(e);
			}
		});
	}
};
