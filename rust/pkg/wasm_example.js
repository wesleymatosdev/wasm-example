import * as wasm from "./wasm_example_bg.wasm";
export * from "./wasm_example_bg.js";
import { __wbg_set_wasm } from "./wasm_example_bg.js";
__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
