const assert = require('assert');

const safeGet = require('../index');

describe('Safety First', () => {
    it('safe get', () => {
        const target = {
            foo: {
                bar: {
                    baz: 'quux'
                }
            }
        };

        assert.equal(safeGet`${target}.foo.bar.baz`, 'quux');
    });

    it('safe get with square brackets', () => {
        const target = {
            foo: {
                bar: ['baz', 'quux']
            }
        };

        assert.equal(safeGet`${target}.foo.bar[1]`, 'quux');
        assert.equal(safeGet`${target}[foo][bar][1]`, 'quux');
        assert.equal(safeGet`${target}['foo']['bar'][1]`, 'quux');
    });

    it('safe get with dynamic string ', () => {
        const bar = 'bar';
        const target = {
            foo: {
                bar: {
                    baz: 'quux'
                }
            }
        };

        assert.equal(safeGet`${target}.foo.${bar}.baz`, 'quux');
        assert.equal(safeGet`${target}.foo[${bar}].baz`, 'quux');
    });
});