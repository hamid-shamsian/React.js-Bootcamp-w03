// A)

const calculator = function (operator, numbersArray) {
   if (numbersArray.length === 0) return console.log("empty array");

   switch (operator) {
      case "+":
         return numbersArray.reduce((sum, number) => sum + number, 0); //initial value can be omitted here because of array fullness check in line 4.
      case "-":
         return numbersArray.reduce((dif, number) => dif - number);
      case "*":
         return numbersArray.reduce((mltpl, number) => mltpl * number, 1); // the same as above comment.
      case "/":
         return numbersArray.reduce((divided, number) => divided / number);
      default:
         return console.log("invalid operator!");
   }
};

// the same function as arrow function syntax:
const calculator2 = (operator, numbersArray) => {
   if (numbersArray.length === 0) return console.log("empty array");

   switch (operator) {
      case "+":
         return numbersArray.reduce((sum, number) => sum + number, 0);
      case "-":
         return numbersArray.reduce((dif, number) => dif - number);
      case "*":
         return numbersArray.reduce((mltpl, number) => mltpl * number, 1);
      case "/":
         return numbersArray.reduce((divided, number) => divided / number);
      default:
         return console.log("invalid operator!");
   }
};

// console.log(calculator("/", [30, 5, 3]));

//  B)

const emptySquareGenerator = n => {
   if (n < 3 || n > 10) return console.log("the number is not in range!");
   let square = "";
   for (i = 1; i <= n; i++) {
      let row = "";
      for (j = 1; j <= n; j++) {
         if (i === 1 || i === n) row += "*";
         else if (j > 1 && j < n) row += " ";
         else row += "*";
      }
      square += row + "\n";
   }
   return square;
};

console.log(emptySquareGenerator(8));
