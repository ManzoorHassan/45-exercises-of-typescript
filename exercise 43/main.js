var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianNames2 = ["ali", "hassan", "hussaun", "ahmed"];
var magicianNamesCopy = __spreadArray([], magicianNames2, true);
function show_magicians(great) {
    var withGreatings = "";
    for (var _i = 0, magicianNamesCopy_1 = magicianNamesCopy; _i < magicianNamesCopy_1.length; _i++) {
        var item = magicianNamesCopy_1[_i];
        withGreatings += "".concat(great, " ").concat(item, "/n");
    }
    return withGreatings;
}
var myGreatings = show_magicians("hello");
var makeArray = myGreatings.split("/n");
console.log(makeArray);
console.log(magicianNames2);
