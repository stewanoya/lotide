# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @stewanoya/lotide`

**Require it:**

`const _ = require('@stewanoya/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: takes an array and returns the first element of the array.
- `tail(...)`: takes an array and returns every element except the first one.
- `middle(...)`: takes an array and returns the middle index of the array. If there are an even amount of numbers in the array, middle() will return the two values and those positions.
- `countOnly(...)`: accepts 2 parameters, an array, and something to look for in the array. It will return a count of how many times it found that "something".
- `countLetters(...)`: similar to countOnly, except it will count a specific letter you are looking for inside a string.
- `letterPositions(...)`: will take a string, and a letter you are looking for, and return the index of that letter from within the string.
- `findKeyByValue(...)`: will take an object, and a value within the object to return the key that contains that value. -`eqObjects(...)`: accepts 2 objects and returns true if they are equal, or false otherwise.
