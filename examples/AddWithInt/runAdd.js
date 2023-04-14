const fs = require("fs");
const path = require("path");

const buf = fs.readFileSync(path.resolve(__dirname, './ex1.wasm'))
module.exports = async function (x, y) {
    const wasm = (await WebAssembly.instantiate(new Uint8Array(buf))).instance.exports;
    const result = wasm.add(x, y);
    return result;
}