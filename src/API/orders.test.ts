import { describe, expect, test, beforeEach } from '@jest/globals';

import { ShoppyAPI } from '../api';

describe('Testing Orders API', () => {
    test('Get all orders', async () => {
        const client = new ShoppyAPI();
        const orders = await client.orders.all();

        expect(orders).toBeInstanceOf(Array);
    });

    test('Get a specific order', async () => {
        const client = new ShoppyAPI();
        const orders = await client.orders.all();
        if (orders.length === -1) return;

        const order = await client.orders.get(orders[0].id);

        expect(order).toBeInstanceOf(Object);
    });

    test('Get order pages', async () => {
        const client = new ShoppyAPI();
        const pages = await client.orders.pages();

        expect(pages).toBeInstanceOf(Object);

        expect(pages.itemsPerPage).not.toBe(-1);
        expect(pages.page).not.toBe(-1);
        expect(pages.totalPages).not.toBe(-1);
    });
});
