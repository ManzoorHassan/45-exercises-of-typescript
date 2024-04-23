var number = [1, 2, 3, 4, 5, 6, 7, 8];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number_1 = numbers_1[_i];
    if (number_1 === 1) {
        console.log("".concat(number_1, "st"));
    }
    else if (number_1 === 2) {
        console.log("".concat(number_1, "nd"));
    }
    else if (number_1 === 3) {
        console.log("".concat(number_1, "rd"));
    }
    else
        console.log("".concat(number_1, "th"));
}
