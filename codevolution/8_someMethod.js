// .some() is an array method used to test whether at least one element in an array satisfies a given condition. It returns a boolean value:
// true: If at least one element passes the test.
// false: If no elements pass the test.

// Use .some() when:
// You need to check if at least one element meets a condition.
// You want to apply a custom condition (e.g., case-insensitivity, partial matches, or checking objects).

// Check if any number in an array is greater than 5:
const numbers = [1, 3, 5, 7];
const hasGreaterThanFive = numbers.some((num) => num > 5);
console.log(hasGreaterThanFive); // Output: true

// Check if any string in an array starts with the letter "B":
const fruits = ["Apple", "Banana", "Cherry"];
const startsWithB = fruits.some((fruit) => fruit.startsWith("B"));
console.log(startsWithB); // Output: true

//  Real-Life Example:
// Scenario 1: Check for Case-Insensitive Matches
// You want to check if the string "Ball" exists in an array (["ball", "Cricket Ball", "Basketball"]), ignoring case.
const listArr = ["ball", "Cricket Ball", "Basketball"];
const input = "Ball";
const isDuplicate = listArr.some(
  (item) => item.toLowerCase() === input.toLowerCase()
);
console.log(isDuplicate); // Output: true
