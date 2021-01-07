"use strict";

const isBabel = !(class {}.toString().indexOf('class ') === 0);
console.log(isBabel);