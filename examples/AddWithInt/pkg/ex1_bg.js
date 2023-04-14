let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function call_me_from_javascript(a, b) {
    const ret = wasm.call_me_from_javascript(a, b);
    return ret;
}

