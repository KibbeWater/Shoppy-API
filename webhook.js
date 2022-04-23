const express = require('express');
const crypto = require('crypto');

const publicip = import('public-ip');

class WebhookAPI {
	#callbacks = [];
	#secret = '';
	#port = 6367;
	#app = null;

	/**
	 * Initialize a new Webhook API
	 * @param {string} webhookSecret Webhook secret used to authenticate requests from shoppy
	 * @param {?number} port Port exposed using an express server (Default: 6367)
	 */
	constructor(webhookSecret, port) {
		this.#secret = webhookSecret;
		this.#port = port | 6367;

		this.#app = express();
		this.#app.use((req, res, next) => {
			req.rawBody = '';
			req.on('data', (chunk) => {
				req.rawBody += chunk;
			});
			req.on('end', () => {
				try {
					req.body = JSON.parse(req.rawBody);
					next();
				} catch (err) {
					console.log('Error parsing body');
					next();
				}
			});
		});
		this.#app.all('/', (req, res) => {
			if (!req.headers['x-shoppy-signature'])
				return res.status(400).json({ error: 'Unauthorized request' });

			let hmac = crypto.createHmac('sha512', this.#secret);
			let signed = hmac.update(Buffer.from(req.rawBody, 'utf-8')).digest('hex');

			if (signed !== req.headers['x-shoppy-signature'])
				return res.status(400).json({ error: 'Unauthorized request' });

			this.#execute(req.body.event, req.body.data);
			res.status(200).json({ success: true });
		});
		this.#app.listen(this.#port);
	}

	/**
	 * Get the webhook URL to use
	 * @returns {Promise<string>} Returns your IPv4 address with the port appended to the end
	 */
	async getWebhookUrl() {
		return `http://${await (await publicip).default.v4()}:${this.#port}/`;
	}

	#execute(event, payload) {
		this.#callbacks.forEach((callback) => {
			if (callback.event === event) callback.callback(payload);
		});
	}

	/**
	 * Register a new callback
	 * @param {string} event Any of the allowed event types from shoppy (https://shoppy.dev/#/webhooks?id=global-webhooks)
	 * @param {function(data):void} callback
	 */
	on(event, callback) {
		this.#callbacks.push({ event, callback });
	}
}

module.exports = WebhookAPI;
