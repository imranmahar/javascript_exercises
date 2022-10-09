const locations = ['himalaya', 'andes', 'tierra del fuego', 'labrador', 'guam']
console.log("Original order:");
console.log(locations);

console.log("\nAlphabetical:");
console.log(Array.from(locations).sort());
console.log("Original order:");
console.log(locations);
console.log("\nReverse alphabetical:");
var fruit2 = locations.slice();
Array.from(fruit2.sort());
Array.from(fruit2.reverse());
console.log(Array.from(fruit2));
console.log("Original order:");
console.log(locations);

console.log("Reverse order:");
console.log(Array.from(locations).reverse());
console.log("Original order:");
console.log(locations);
console.log("alphabetical order:");
console.log(Array.from(locations).sort());

console.log("Reverse order:");
console.log(Array.from(fruit2));