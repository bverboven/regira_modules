import "regenerator-runtime/runtime";
import { debounceToPromise, enqueue } from '../../src/utilities/promise-utility';

const data = {};
beforeEach(() => {
    const myFunc = jest.fn(function (p1, delay = 0, error = null) {
        return new Promise((resolve, reject) => {
            setTimeout(() => error ? reject(Error(error)) : resolve(p1), delay);
        });
    });

    data.func = myFunc;
    data.fnListSuccess = [() => myFunc(1, 25), () => myFunc(2, 10), () => myFunc(3, 15), () => myFunc(4, 5)];
    data.errorMessage = 'bad parameter';
    data.fnListWithError = [() => myFunc(1, 25), () => myFunc(2, 10, data.errorMessage), () => myFunc(3, 15), () => myFunc(4, 5)];
});

// debounce
describe('testing debounceToPromise', () => {
    test('debounce a function resulting in a Promise', () => {
        const debouncedFunc = debounceToPromise(data.func, 25);
        return Promise.race([
            debouncedFunc(1),
            debouncedFunc(2),
            debouncedFunc(3)
        ]).then(result => {
            expect(data.func.mock.calls.length).toBe(1);
            //expect(result).toBe(3);
            expect(data.func.mock.results[0].value).resolves.toBe(3);
        });
    });
});

// test with Promises
describe('testing enqueu on Promise functions', () => {
    test('enqueue a collection of functions resulting in a Promise and execute in order', () => {
        return enqueue(data.fnListSuccess)
            .then(result => {
                expect(data.func.mock.calls.length).toBe(data.fnListSuccess.length);
                expect(result).toEqual([1, 2, 3, 4]);
            });
    });
    test('enqueue a collection of functions resulting in a Promise with at least 1 error response', () => {
        expect.assertions(3);
        return enqueue(data.fnListWithError)
            .catch(results => {
                expect(data.func.mock.calls.length).toBe(data.fnListWithError.length);
                expect(data.func.mock.results[1].value).rejects.toEqual(Error(data.errorMessage));
                expect(results).toEqual([1, Error(data.errorMessage), 3, 4]);
            });
    });
});
// test async
describe('testing enqueue on async functions', () => {
    test('enqueue a collection of async functions and execute in order', async () => {
        await expect(enqueue(data.fnListSuccess))
            .resolves
            .toEqual([1, 2, 3, 4]);
        await expect(data.func.mock.calls.length).toBe(data.fnListSuccess.length);
    });
    test('enqueue a collection of async functions with at least 1 error response', async () => {
        try {
            await enqueue(data.fnListWithError);
        } catch (results) {
            expect(data.func.mock.calls.length).toBe(data.fnListWithError.length);
            expect(results).toEqual([1, Error(data.errorMessage), 3, 4]);
        }
    });
});