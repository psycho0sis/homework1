// There is an array with the most popular last names,
// but the first two elements don’t look like valid last names.
// Delete the first two elements of the array.

const arr = ["НПП Прізвище Кіл-ть Приблизно", "______________________в_ базіпо_Україні",
    "0-rt-rgfr", "8484fjdfkf", "МЕЛЬНИК", "ШЕВЧЕНКО", "БОЙКО", "КОВАЛЕНКО", "БОНДАРЕНКО",
    "ТКАЧЕНКО", "КОВАЛЬЧУК", "КРАВЧЕНКО", "ОЛІЙНИК"]

const deleteArrayItems = function (array) {
    array.splice(0, 4);
    return arr;
}

console.log(deleteArrayItems(arr));