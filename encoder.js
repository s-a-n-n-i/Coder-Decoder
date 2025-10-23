const readline = require('readline');

let encoder = new TextEncoder();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string to encode to Uint8Array: ', (input)=>{
    let uint8Array = encoder.encode(input);
    console.log(uint8Array);
    rl.close();
});
