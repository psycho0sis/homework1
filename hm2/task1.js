// Implement a function called pinCodeGenerator. 
// This function should take one argument called length and return a randomly generated pin code of a given length.

// For example,  pinCodeGenerator(5) → 73473


const pinCodeGenerator = function (length) {
 const randomNumber =  Math.random();
 const randomNumberToArr = randomNumber.toString().split("");
 const pinCodeFromArr = randomNumberToArr.splice(2, length);
 const pinCode = Number(pinCodeFromArr.join(""))
  return pinCode;
}

const length1 = 5;
console.log(pinCodeGenerator(length1))
