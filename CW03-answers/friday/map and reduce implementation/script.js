const numbers = [1, 2, 3, 4, 5];

// A)
//>>>>>>>>> javascript built-in map example:

const doubled = numbers.map(function (number) {
   return number * 2;
});
// arrow function syntax for callback:
const doubled2 = numbers.map(number => number * 2);
console.log("built-in map result: ", doubled2);

//>>>>>>>>> our implementaion of map method:

const myMap = (arr, callback) => {
   if (!Array.isArray(arr) || typeof callback !== "function") throw new TypeError("at least one invalid argument!"); // if type of arguments is not valid, throw a TypeError to the console, or for error handling with try-catch...
   const result = [];
   for (let element of arr) {
      result.push(callback(element));
   }
   return result;
};

const doubled3 = myMap(numbers, number => number * 2);
console.log("implemented map result: ", doubled3);

// B)
//>>>>>>>>> javascript built-in reduce example:

const totalSum = numbers.reduce((sum, currentValue) => sum + currentValue, 0);
console.log("built-in reduce result: ", totalSum);

//>>>>>>>>> our implementaion of reduce method:

const myReduce = (arr, callback, initialValue) => {
   if (!Array.isArray(arr) || typeof callback !== "function") throw new TypeError("at least one invalid argument!"); // if type of arguments is not valid, throw a TypeError to the console, or for error handling with try-catch...
   // console.log(initialValue);
   let accumulator = initialValue ?? arr.shift(); // if the initialValie is null or undefined, then accumulator will be assigned with the first element of the arr (shift method will return it) and shift method will remove this first eleemnt from arr to be ready for iteration from second element.
   if (accumulator === undefined) throw new TypeError("Reduce of empty array with no initial value"); // in the previous line, if initial value is not provided and the array is empty, then accumulator will be undefined here, so will throw a TypeError to the console, or for error handling with try-catch...
   // console.log(accumulator);
   // console.log(arr);
   for (let element of arr) {
      accumulator = callback(accumulator, element);
   }
   return accumulator;
};

const totalSum2 = myReduce(numbers, (sum, currentvalue) => sum + currentvalue, 0);
console.log("implemented reduce result: ", totalSum2);
