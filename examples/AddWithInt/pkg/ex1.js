import * as wasm from "./ex1_bg.wasm";
import { __wbg_set_wasm } from "./ex1_bg.js";
__wbg_set_wasm(wasm);
export * from "./ex1_bg.js";
