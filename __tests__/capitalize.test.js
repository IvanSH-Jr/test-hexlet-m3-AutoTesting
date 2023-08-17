
import capitalize from '../src/capitalize.js';

test('capitalize', () => {
    expect(capitalize('')).toEqual('');
    expect(capitalize('hello')).toEqual('Hello');
});

