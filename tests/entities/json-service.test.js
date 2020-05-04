import "regenerator-runtime/runtime";
import axios from 'axios';
import JsonService from '../../src/entities/json-service';

jest.mock('axios');

const data = {};
beforeEach(() => {
    data.service = new JsonService('/rootUrl', 'items');
    data.items = [...Array(5)].fill(null).map((x, i) => ({ id: i + 1, title: `item #${i + 1}` }));
});


test('catalog url', () => {
    expect(data.service.getCatalogUrl('/rootUrl', 'items')).toMatch('/rootUrl/items.json');
});
test('list items', async () => {
    const responseObj = { data: data.items, status: 200 };
    axios.get.mockImplementation(async () => responseObj);

    await data.service.list().then(result => expect(result).toEqual(data.items));
});

test('list items with 404', async () => {
    const responseObj = { statusText: 'Page not found', status: 404 };
    axios.get.mockImplementation(async () => responseObj);

    const result = data.service.list();
    const errorMessage = `Page not found (${responseObj.status})`;
    await expect(result).rejects.toThrow(errorMessage);
});