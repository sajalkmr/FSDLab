let cities = [];
const prompt = require(`prompt-sync`)();
for (let i = 0; i < 5; i++) {
    let city = prompt(`Enter city ${i + 1}:`);
    cities.push(city);
}

console.log("Initial list of cities:", cities);
console.log("Total number of cities:", cities.length);

let newCity = prompt("Enter a city to add at the end:");
cities.push(newCity);
console.log("After adding a city:", cities);

cities.shift();
console.log("After removing the first city:", cities);

let cityToFind = prompt("Enter a city to find its index:");
let cityIndex = cities.indexOf(cityToFind);

if (cityIndex !== -1) {
    console.log(`${cityToFind} is at index:`, cityIndex);
} else {
    console.log(`${cityToFind} not found in the array.`);
}
