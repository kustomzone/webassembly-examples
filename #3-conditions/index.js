const wasm = require('./conditions')().exports

console.log(wasm.greather(20, 10))
console.log(wasm.greather2(20, 100))
console.log(wasm.greather10(20))