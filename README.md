# vnu-ts-array-helper

> TS package: Some array helper functions

[![npm downloads](https://img.shields.io/npm/dt/vnu-ts-array-helper)](https://www.npmjs.com/package/vnu-ts-array-helper)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Install

```shell
npm install vnu-ts-array-helper
```

```shell
yarn add vnu-ts-array-helper
```

## Usage

```js
import * as arrayHelper from 'vnu-ts-array-helper';

arrayHelper.sum([1, 2, 3, 4, 5]);
//=> 15

import { prepend } from 'vnu-ts-array-helper';
const array = [1, 2, 3, 4, 5];
prepend(a, 6);
//=> [6, 1, 2, 3, 4, 5]
```

## Import

This package is pure [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). It cannot be `require()`'d from CommonJS.

Use `import foo from 'foo'` instead of `const foo = require('foo')` to import the package.

```js
// Load entire build
import * as arrayHelper from 'vnu-ts-array-helper';

// Load by method
import {all} from 'vnu-ts-array-helper';
```

If the package is used in an async context, you could use [`await import(…)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) from CommonJS instead of `require(…)`.

**You also need to make sure you're on the latest minor version of Node.js. At minimum Node.js 12.20, 14.14, or 16.0.**

Read more here: [sindresorhus/esm-package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Functions

`prepend` : Prepend value into array.

`groupMap` : Group items by common key and return an map of items grouped by key.

`group` : Group items by common key and return an array of groups.

`head` : Gets the first element of `array`.

`last` : Gets the last element of `array`.

`tail` : Gets all but the first element of `array`.

`sortBy` : Sort array by a category.

`toChunks` : Split an array into chunks.

`toCSV` : Converts the elements that don’t have commas or double quotes to strings with comma-separated values.

`unDuplicate` : Remove duplicate items from an array.

`sum` : Get the sum of an array of numbers

`combine` : Return combine dictionary by a field

`singleCombine` : Returns combine dictionary by a file.
