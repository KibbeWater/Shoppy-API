import { describe, expect, test } from '@jest/globals';

import { ShoppyAPI } from './API';
import ApiBase from './API/apibase';

describe('Testing API and API Endpoints', () => {
    test('Axios API generation', () => {
        const client = new ShoppyAPI();

        expect(client.api).toBeDefined();
        expect(client.orders).toBeDefined();
        expect(client.products).toBeDefined();
        expect(client.feedbacks).toBeDefined();
        expect(client.queries).toBeDefined();
        expect(client.pay).toBeDefined();
    });

    test('Correctly determining API key', () => {
        const client = new ShoppyAPI();
        const client2 = new ShoppyAPI('test');

        expect(client.api.defaults.headers['Authorization']).toBe(process.env.SHOPPY_API_KEY);
        expect(client2.api.defaults.headers['Authorization']).toBe('test');
    });

    test.skip('Axios interceptor', () => {
        const client = new ShoppyAPI();
        const apiBase = new ApiBase(client.api);

        const api = apiBase.api;

        // @ts-ignore
        expect(api.apiVersion).toBeDefined();
        api.get('/test_jest', { validateStatus: () => true }).then((res) => {
            const url = res.request.path;
            // @ts-ignore
            expect(url).toBe(`/api/v${api.apiVersion}/test_jest`);
        });
    });
});
