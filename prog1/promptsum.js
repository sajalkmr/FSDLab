const prompt = require(`prompt-sync`)();

const a = prompt("Enter no1-");
const b = prompt("Enter no2-");
const sum = parseFloat(a)+parseFloat(b);
console.log(`the sum of ${a} and ${b} is ${sum}`);
