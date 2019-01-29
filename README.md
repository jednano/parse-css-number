# parse-css-number

[![NPM version](http://img.shields.io/npm/v/parse-css-number.svg?style=flat)](https://www.npmjs.org/package/parse-css-number)
[![npm license](http://img.shields.io/npm/l/parse-css-number.svg?style=flat-square)](https://www.npmjs.org/package/parse-css-number)
[![Travis Build Status](https://img.shields.io/travis/jedmao/parse-css-number.svg)](https://travis-ci.org/jedmao/parse-css-number)
[![codecov](https://codecov.io/gh/jedmao/parse-css-number/branch/master/graph/badge.svg)](https://codecov.io/gh/jedmao/parse-css-number)
[![BundlePhobia Minified](https://badgen.net/bundlephobia/min/parse-css-number?label=min)](https://bundlephobia.com/result?p=parse-css-number)
[![BundlePhobia Minified + gzip](https://badgen.net/bundlephobia/minzip/parse-css-number?label=min%2Bgzip)](https://bundlephobia.com/result?p=parse-css-number)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Unicorn Approved](https://img.shields.io/badge/unicorn-approved-ff69b4.svg)](https://twitter.com/sindresorhus/status/457989012528316416?ref_src=twsrc%5Etfw&ref_url=https%3A%2F%2Fwww.quora.com%2FWhat-does-the-unicorn-approved-shield-mean-in-GitHub)

[![npm](https://nodei.co/npm/parse-css-number.svg?downloads=true)](https://nodei.co/npm/parse-css-number/)

Parses a CSS [`<number>`](https://developer.mozilla.org/en-US/docs/Web/CSS/number), being either an integer or a number with a fractional component.

## Installation

```
$ npm install parse-css-number [--save[-dev]]
```

## Usage

```js
const parseCSSNumber = require('parse-css-number')

// Valid numbers
// https://developer.mozilla.org/en-US/docs/Web/CSS/number#Valid_numbers
parseCSSNumber('12') // A raw <integer> is also a <number>.
parseCSSNumber('4.01') // Positive fraction
parseCSSNumber('-456.8') // Negative fraction
parseCSSNumber('0.0') // Zero
parseCSSNumber('+0.0') // Zero, with a leading +
parseCSSNumber('-0.0') // Zero, with a leading -
parseCSSNumber('.60') // Fractional number without a leading zero
parseCSSNumber('10e3') // Scientific notation
parseCSSNumber('-3.4e-2') // Complicated scientific notation

// Invalid numbers
// https://developer.mozilla.org/en-US/docs/Web/CSS/number#Invalid_numbers
parseCSSNumber('12.') // Decimal points must be followed by at least one digit.
parseCSSNumber('+-12.2') // Only one leading +/- is allowed.
parseCSSNumber('12.1.1') // Only one decimal point is allowed.
```

See [the tests](https://github.com/jedmao/parse-css-number/blob/master/src/index.test.ts) for more scenarios.

### ES6/2015 import

```ts
import parseCSSNumber from 'parse-css-number'
```

## Testing

```
$ npm test
```

This will run tests and generate a code coverage report. Anything less than 100% coverage will throw an error.
