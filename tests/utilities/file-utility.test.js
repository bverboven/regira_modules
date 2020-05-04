import "regenerator-runtime/runtime";
import { isFile, getFilename, getExtension } from '../../src/utilities/file-utility';

const data = {};
beforeEach(() => {
    data.textFilename = 'plain-text.txt';
    data.jsonFilename = 'my_json.json';

    data.textBlob = new Blob(['This is a plain text test.'], { type: 'text/plain' });
    data.textBlob.name = data.textFilename;

    data.jsonBlob = new Blob([JSON.stringify({ value: 'test' })], { type: 'application/json' })
    data.jsonBlob.name = data.jsonFilename;
});

test('check if an object is a file', () => {
    expect(isFile(data.textBlob)).toBeTruthy();
    expect(isFile({ name: 'fake-file.txt', size: 10, type: 'text/plain' })).toBeFalsy();
});
describe('get the filename from a uri', () => {
    test('a simple filename returns itself', () => {
        expect(getFilename('filename.txt')).toBe('filename.txt');
    });
    test('a uri with a single parent folder returns the filename without folder', () => {
        expect(getFilename('folder/filename.txt')).toBe('filename.txt');
    });
    test('a uri with multiple parent folders returns the filename without folders', () => {
        expect(getFilename('folder/another/filename.txt')).toBe('filename.txt');
    });
    test('an absolute uri returns the only filename', () => {
        expect(getFilename('http://www.my-domain.com/files/filename.txt')).toBe('filename.txt');
    });
    test('an invalid uri throws an error', () => {
        // throws an error :~
        //expect(getFilename('folder/another/')).toThrow();
        try {
            getFilename('folder/another/');
        } catch (err) {
            expect(err.message).toMatch('filename cannot end with a \'/\'');
        }
    });
});