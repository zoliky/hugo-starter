"use strict";

// Check if Babel is enabled
const isBabel = !(class {}.toString().indexOf('class ') === 0);
console.log("Babel enabled:", isBabel);