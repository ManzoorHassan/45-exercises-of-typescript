var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// marking a array of countries and prient its orginal order
var countrytovisit = ["china", "denmark", "brazil", "argentana"];
console.log("orginal order:", countrytovisit);
//prient the arry in alphabatical order without modifying the actual array list
console.log("alphabatical order:", __spreadArray([], countrytovisit, true).sort());
//show that the array in still to its orginal order
console.log("still in orginal order:", countrytovisit);
// prient the array in reverse order with out modificing the actul array list
console.log("reverse order:", __spreadArray([], countrytovisit, true).reverse());
//show that the array in still to its orginal order
console.log("still in orginal order:", countrytovisit);
// we have change the orginal array order name
console.log("orginal array reverse:", countrytovisit.reverse());
//print the array to show that back to its orginal order 
console.log("back to orginal order:", countrytovisit.reverse());
//print the array to show that its order has been changed in alphabatical order now
console.log("sorted in in alphabatical order:", countrytovisit.sort());
// we have changed again the orginal array order now in reverse order again.
console.log("orginal array reversed again:", countrytovisit.reverse());
