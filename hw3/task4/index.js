String.prototype.removeSpecialCharacters = function () {
    let array = this.split("");
    let newArr = array.filter(isLetter);
    return newArr.join("")
}

function isLetter(letter) {
    if (letter !== "!" && letter !== "?") return letter;
}

console.log("HE!!LL??OO".removeSpecialCharacters())