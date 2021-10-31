String.prototype.removeSpecialCharacters = function () {
    const regex = /[^a-zA-Z0-9]/g;
    var newstr = this.replace(regex, "")
    return newstr
}

console.log("HE!!LL??OO".removeSpecialCharacters())