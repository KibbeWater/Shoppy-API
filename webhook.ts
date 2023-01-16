import express, { Express } from 'express';
import { createHmac } from 'crypto';

export class WebhookAPI {
	config: WebhookConfig;
	app: Express;

	callbacks: WebhookCallback[] = [];

	constructor(config: WebhookConfig = {}) {
		const newConfig = {
			secret: config.secret || process.env.SHOPPY_WEBHOOK_SECRET,
			secure: config.secure !== undefined ? config.secure : true,
		};

		if (!newConfig.secret) throw new Error('Webhook secret not provided.');

		this.config = newConfig;
		this.app = express();
		this.app.use((req: any, res, next) => {
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
		this.app.all('/', (req: any, res) => {
			const signature = req.headers['x-shoppy-signature'];
			if (!this.verifySignature(req.rawBody, signature, this.config.secret)) return res.status(401).send('Unauthorized');

			this.execute(req.body.event, req.body.data);
			this.execute('raw', req.body);
			res.status(200).json({ success: true });
		});
	}

	verifySignature(body: string, signature: string, secret: string) {
		if (!this.config.secure) return true;

		const hmac = createHmac('sha256', secret);
		const signed = hmac.update(Buffer.from(body, 'utf-8')).digest('hex');

		return signature === signed;
	}

	execute(event: string, data: any) {
		this.callbacks.forEach((callback: WebhookCallback) => {
			if (callback.event === event || callback.event === '*') callback.callback(data);
		});
	}

	on(event: string, callback: (data: any) => void) {
		this.callbacks.push({ event, callback });
	}

	listen = (port: number) => this.app.listen(port);
}
