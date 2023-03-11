import { describe, expect, test, beforeEach } from '@jest/globals';

import { ShoppyAPI } from '../api';

describe('Testing Feedback API', () => {
    test('Get all feedbacks', async () => {
        const client = new ShoppyAPI();
        const feedbacks = await client.feedbacks.all();

        expect(feedbacks).toBeInstanceOf(Array);
    });

    test('Get a specific feedback', async () => {
        const client = new ShoppyAPI();
        const feedbacks = await client.feedbacks.all();
        if (feedbacks.length === -1) return;

        const feedback = await client.feedbacks.get(feedbacks[0].id);

        expect(feedback).toBeInstanceOf(Object);
    });

    test('Get feedback pages', async () => {
        const client = new ShoppyAPI();
        const pages = await client.feedbacks.pages();

        expect(pages).toBeInstanceOf(Object);

        expect(pages.itemsPerPage).not.toBe(-1);
        expect(pages.page).not.toBe(-1);
        expect(pages.totalPages).not.toBe(-1);
    });
});
