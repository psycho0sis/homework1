// There is a function which counts all vowels in a given string, but for some reason I don’t work as expected. 
// Find out the problem and fix it.
// const vovelsCounter = (str) => {
//     	    const vovels = ['a', 'e', 'i', 'o', 'u']
//     	    let counter = 0
//     	    for(letter of str){
//              if(vovels.includes(letter)){
//                  counter = counter + 1
//         	  }
//     	    }
//     	    return counter
// }

// vovelsCounter('The current directory is AD-123')
// expected output → 8
// actual output → 7

const vovelsCounter = (str) => {
  const vovels = ['a', 'e', 'i', 'o', 'u', 'y']; //there wasn't a "y" in the array of vowels
  let counter = 0;
  for(letter of str){
    if(vovels.includes(letter)){
      counter += 1;
    }
  }
  return counter;
}
console.log(vovelsCounter('The current directory is AD-123'));

//but, if you meant an upper A in "AD-123", here is another silution 

const vovelsCounter2 = (str) => {
    const vovels = ['a', 'e', 'i', 'o', 'u'];
    const vovelsToUpperCase = ['A', 'E', 'I', 'O', 'U'];
  let counter = 0;
  for(letter of str){
    if(vovels.includes(letter) || vovelsToUpperCase.includes(letter.toUpperCase())){
      counter += 1;
    }
  }
  return counter;
}
console.log(vovelsCounter2('The current directory is AD-123'));