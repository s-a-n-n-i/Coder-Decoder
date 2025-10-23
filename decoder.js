
const readline = require('readline');

const decoder = new TextDecoder();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a comma-separated list of byte values to decode to string: ', (input)=>{
    const byteValues = input.split(/\s*,\s*/).map(num => parseInt(num.trim()));
    const uint8Array = new Uint8Array(byteValues);    
    const decodedString = decoder.decode(uint8Array);
    console.log(decodedString);
    rl.close();
});