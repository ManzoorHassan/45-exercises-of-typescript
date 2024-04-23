function mySandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return " I want Sndwich of ".concat(items);
}
;
var collection1 = mySandwiches("Ham", "cheeze", "lettuce");
var collection2 = mySandwiches("turkey", "swiss");
var collection3 = mySandwiches();
console.log(collection1);
console.log(collection2);
console.log(collection3);
