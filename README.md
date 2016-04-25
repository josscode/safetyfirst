# Safety First

Safe nested lookups utilising tagged template literals functionality

[![npm version](https://img.shields.io/npm/v/safetyfirst.svg?style=flat-square)](https://www.npmjs.com/package/safetyfirst)

# Usage

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