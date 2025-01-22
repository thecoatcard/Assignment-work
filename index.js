// Basic array declaration
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// 1. length
console.log("Length of array:", fruits.length);

// 2. toString
console.log("Array as a string:", fruits.toString());

// 3. at
console.log("Element at index 2:", fruits.at(2));

// 4. join
console.log("Joined array with -:", fruits.join(" - "));

// 5. pop
console.log("Popped element:", fruits.pop());
console.log("Array after pop:", fruits);

// 6. push
fruits.push("Fig");
console.log("Array after push:", fruits);

// 7. shift
console.log("Shifted element:", fruits.shift());
console.log("Array after shift:", fruits);

// 8. unshift
fruits.unshift("Apricot");
console.log("Array after unshift:", fruits);

// 9. delete
delete fruits[1];
console.log("Array after delete (index 1):", fruits);

// 10. concat
let vegetables = ["Carrot", "Potato"];
let combined = fruits.concat(vegetables);
console.log("Combined array:", combined);

// 11. copyWithin
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(1, 3, 5);
console.log("Array after copyWithin:", numbers);

// 12. flat
let nestedArray = [[1, 2], [3, 4], [5]];
console.log("Flattened array:", nestedArray.flat());

// 13. splice
fruits.splice(1, 1, "Blueberry", "Cranberry");
console.log("Array after splice:", fruits);

// 14. toSpliced
let splicedCopy = fruits.toSpliced(2, 1, "Grapefruit");
console.log("Original array (toSpliced is non-mutating):", fruits);
console.log("New array after toSpliced:", splicedCopy);

// 15. slice
let sliced = fruits.slice(1, 3);
console.log("Sliced array (index 1 to 3):", sliced);

// 16. search methods (find, indexOf, includes)
let found = fruits.find(fruit => fruit.startsWith("C"));
console.log("First fruit starting with 'C':", found);
console.log("Index of 'Blueberry':", fruits.indexOf("Blueberry"));
console.log("Does the array include 'Date'?", fruits.includes("Date"));

// 17. sort methods
let sortedFruits = [...fruits].sort();
console.log("Sorted array:", sortedFruits);

// 18. iteration methods (forEach, map, filter, reduce)
fruits.forEach(fruit => console.log("Fruit:", fruit));
let upperCaseFruits = fruits.map(fruit => fruit?.toUpperCase());
console.log("Uppercase fruits:", upperCaseFruits);
let filteredFruits = fruits.filter(fruit => fruit?.length > 6);
console.log("Filtered fruits (length > 6):", filteredFruits);
let totalLength = fruits.reduce((total, fruit) => total + (fruit?.length || 0), 0);
console.log("Total length of fruit names:", totalLength);
