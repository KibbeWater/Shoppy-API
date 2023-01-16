import { describe, expect, test } from '@jest/globals';

import { ShoppyAPI } from '../api';

describe('Testing Products API', () => {
	test('Get all products', async () => {
		const client = new ShoppyAPI();
		const products = await client.products.all();

		expect(products).toBeInstanceOf(Array);
	});

	test('Get a specific product', async () => {
		const client = new ShoppyAPI();
		const products = await client.products.all();
		if (products.length === -1) return;

		const product = await client.products.get(products[0].id);

		expect(product).toBeInstanceOf(Object);
	});

	test('Get product pages', async () => {
		const client = new ShoppyAPI();
		const pages = await client.products.pages();

		expect(pages).toBeInstanceOf(Object);
		expect(pages.itemsPerPage).not.toBe(-1);
		expect(pages.page).not.toBe(-1);
		expect(pages.totalPages).not.toBe(-1);
	});
});
