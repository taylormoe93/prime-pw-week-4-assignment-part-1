console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
	return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
	return 'Hello, ' + name;
}
console.log(helloName('Taylor')); // Remember to call the function to test

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
	// return firstNumber + secondNumber;
	return firstNumber + secondNumber;
}
console.log('addNumbers - should say 3', addNumbers(1, 2)); // Console log test with two numbers to add

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
	// return the three numbers
	return firstNumber * secondNumber * thirdNumber;
}
console.log('multiplyThree - should say 6', multiplyThree(1, 2, 3)); // Console log test with three numbers to multiply

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
	if (number > 0) {
		return true;
	} else return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let availableBooks = ['hobbit', 'fellowship', 'towers', 'return'];
let availableMovies = [];
function getLast(array) {
	return array[array.length - 1];
}
console.log('Expected to say Return', getLast(availableBooks));
console.log('Expected to say Undefined', getLast(availableMovies));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

// I had difficulty with this one. I researched online to find a solution, and tailored it to this problem. I'm getting the correct outcome, although I'm not sure if I went about it the intended way.

let numbers = [1, 2, 3, 4, 5];
function find(value, array) {
	for (i = 0, length = numbers.length; i < length; i++) {
		if (numbers[i] === value) {
			return true;
		} else return false;
	}
}
console.log(find(1)); // Expected to return true
console.log(find(9)); // Expected to return false

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
	let sum = 0;
	// TODO: loop to add items
	return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
