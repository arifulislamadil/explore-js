// const os = require('node:os');

// console.log(os.freemem())

const fs = require("fs");

fs.writeFileSync('myfile.txt', "hello world ");
fs.appendFileSync('myfile.txt', "How are you?");
const data = fs.readFileSync('myfile.txt');
console.log(data.toString())
