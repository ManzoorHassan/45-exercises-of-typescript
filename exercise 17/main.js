// creating a guest list arry
var guestList = ["uzair", "hassan", "amna", "areeba", "amir", "ali"];
// making varible for those guest who cant come
var dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, "naii aa sakty hen");
// add or remove guest list arry
guestList.splice(0, 1, "asad");
// message print a bigger table
console.log("good news we have found a bigger table for dinner");
// adding a new guest at starting index of arry
guestList.unshift("yaseen");
// adding a new value at ending index of arry
guestList.push("hyder");
// get a middle index of our guest list arry
var middleIndex = Math.floor(guestList.length / 2);
// add one new guest to middle index of arry
guestList.splice(middleIndex, 0, "kashif");
// prent message of updated list
console.log("updated list of our guests");
// sending a invitation message to our guests one by one with name 
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like dinner with me")); });
//inforce  that only two guest invited for dinner
console.log("unfortunally, we can not arrange the table only two people allow");
// using while loop to remove guests from the arry untill only two names removes
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// sending invitation to the last two guest on the list 
console.log("invetation to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("luckly ${lasttwo}, you are still invited to the dinner"); });
//remmoving last two guest from the last
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
