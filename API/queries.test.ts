import { describe, expect, test } from '@jest/globals';

import { ShoppyAPI } from '../api';

describe('Testing Queries API', () => {
	test('Get all queries', async () => {
		const client = new ShoppyAPI();
		const queries = await client.queries.all();

		expect(queries).toBeInstanceOf(Array);
	});

	test('Get a specific query', async () => {
		const client = new ShoppyAPI();
		const queries = await client.queries.all();
		if (queries.length === -1) return;

		const query = await client.queries.get(queries[0].id);

		expect(query).toBeInstanceOf(Object);
	});

	test('Get query pages', async () => {
		const client = new ShoppyAPI();
		const pages = await client.queries.pages();

		expect(pages).toBeInstanceOf(Object);

		expect(pages.itemsPerPage).not.toBe(-1);
		expect(pages.page).not.toBe(-1);
		expect(pages.totalPages).not.toBe(-1);
	});
});
