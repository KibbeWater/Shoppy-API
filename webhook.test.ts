import { describe, expect, test, jest } from '@jest/globals';
import { createHmac } from 'crypto';

import { WebhookAPI } from './api';

describe('Testing Webhook API', () => {
	test('Register a webhook', async () => {
		const client = new WebhookAPI();
		client.on('test', () => {});

		expect(client.callbacks.length).toBe(1);
	});

	test('Execute a webhook', async () => {
		const client = new WebhookAPI();

		const mockWildcard = jest.fn<(data) => void>();

		client.on('*', mockWildcard);
		client.on('test69', (data) => {
			expect(data).toBe('regular');
		});
		client.on('raw', (data) => {
			expect(data).toBe('raw');
		});

		client.execute('test69', 'regular');
		client.execute('raw', 'raw');
		expect(mockWildcard).toBeCalledTimes(2);
	});

	test('Webhook request signature verification', async () => {
		const client = new WebhookAPI();
		const secret = 'herebythesewordsideclarethiswebhooksecure';

		client.config.secret = secret;

		const body = JSON.stringify({ test: 'test' });
		const signature = createHmac('sha256', secret).update(body).digest('hex');

		// Create a fake request and use client.verifySignature to verify it
		expect(client.verifySignature(body, signature, secret)).toBe(true);
	});
});
