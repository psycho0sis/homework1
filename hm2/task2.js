// Create a function which checks whether a phone number is valid or not. 
// NOTE: You don’t need to test your function with all possible phone numbers, 
// just check if the function will work correctly with the following inputs.

// validatePhoneNymber(067 734 4343) → true
// validatePhoneNymber(094 643 7432) → true
// validatePhoneNymber(083 jfvj 4554) → false
// validatePhoneNymber(Anton0938 884) → false
// validatePhoneNymber(0437348348) → true


const validatePhoneNymber = function (number) {
  number = number.replace(/\s/g, '');
  const stringIsArray = number.split("");
  const newArr = stringIsArray.map((item) => {
    return +item;
  })
  if (number.length === 10 && newArr.every(item => typeof item === "number")){
    return true;
  } else {
    return false;
  }
}

const phone1 = "067 734 4343";
const phone2 = "094 643 7432";
const phone3 = "083 jfvj 4554";
const phone4 = "Anton0938 884";
const phone5 = "0437348348";
console.log(validatePhoneNymber(phone1))
console.log(validatePhoneNymber(phone2))
console.log(validatePhoneNymber(phone3))
console.log(validatePhoneNymber(phone4))
console.log(validatePhoneNymber(phone5))