let uint8Array = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]);

console.log(new TextDecoder().decode(uint8Array));

let uint8Array_2 = new Uint8Array([228, 189, 160, 229, 165, 189]);

console.log(new TextDecoder().decode(uint8Array_2));