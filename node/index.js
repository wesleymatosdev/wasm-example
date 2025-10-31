import * as wasm from '../rust/pkg/wasm_example.js';

const result = wasm.add(10, 32);

console.log(`Hello World! addResult: ${result}`);
