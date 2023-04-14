use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn call_me_from_javascript(a: i32, b: i32) -> i32 {
    return add_integer_with_constant(a, b);
}


//cuz webasm cant pull from other variables we need to wrap it in upper function
const ADD_CONSTANT: i32 = 24;
fn add_integer_with_constant(a: i32, b: i32) -> i32 {
    return a + b + ADD_CONSTANT;
}