# Safety First

Safe nested lookups with simple tagged template syntax

[![npm version](https://img.shields.io/npm/v/safetyfirst.svg?style=flat-square)](https://www.npmjs.com/package/safetyfirst)

This library aims to enable safe nested lookups in manner similar to lodash/get 
and other such libraries but uses [Tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals)
to provide an alternate syntax. 

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

// mirrors basic lookup functionality
g`${target}.foo.bar.baz` === 'quux'
g`${target}[foo].bar.baz` === 'quux'
g`${target}['foo'].bar.baz` === 'quux'

// normally target.waldo.fred would have thrown an error
g`${target}.waldo.fred` === undefined

// interpolation 
const bar = 'bar';
g`${target}.foo.${bar}.baz` === 'quux'
g`${target}.foo[${bar}].baz` === 'quux'

// array lookups
g`${target}.foo.bar.corge[0]` === 'grault'
```