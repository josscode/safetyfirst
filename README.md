# Safety First

Safe nested lookups utilising tagged template literals functionality

[![npm version](https://img.shields.io/npm/v/safetyfirst.svg?style=flat-square)](https://www.npmjs.com/package/safetyfirst)

# Usage

You can either import the whole library or just specific functions if you prefer explicit dependencies.

```js
// use whatever alias you like
const g = require('safetyfirst');

const target = {
    foo: {
        bar: {
            baz: 'quux'
            corge: ['grault']
        }
    }
};

g`${target}.foo.bar.baz` === 'quux'
g`${target}[foo].bar.baz` === 'quux'
g`${target}['foo'].bar.baz` === 'quux'

const bar = 'bar';
g`${target}.foo.${bar}.baz` === 'quux'
g`${target}.foo[${bar}].baz` === 'quux'

g`${target}.foo.bar.corge[0]` === 'grault'
```