const express = require('express');
const crypto = require('crypto');

const publicip = import('public-ip');

class WebhookAPI {
	#callbacks = [];

	/**
	 * Initialize a new Webhook API
	 * @param {string} webhookSecret Webhook secret used to authenticate requests from shoppy
	 * @param {?number} port Port exposed using an express server (Default: 6367)
	 */
	constructor(webhookSecret, port) {
		this.secret = webhookSecret;
		this.port = port | 6367;

		this.app = express();
		this.app.use(express.json());
		this.app.all('/', (req, res) => {
			if (!req.headers['X-Shoppy-Signature'])
				return res.status(400).json({ error: 'Unauthorized request' });

			let signature = crypto.createHmac('sha256', this.secret).update(req.body).digest('hex');
			if (signature !== req.headers['X-Shoppy-Signature'])
				return res.status(400).json({ error: 'Unauthorized request' });

			this.#execute(req.body.event, req.body.data);
			res.status(200).json({ success: true });
		});
	}

	/**
	 * Get the webhook URL to use
	 * @returns {string} Returns your IPv4 address with the port appended to the end
	 */
	async getWebhookUrl() {
		return (await (await publicip).default.v4()) + `:${this.port}`;
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
