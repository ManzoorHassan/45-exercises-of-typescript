var guestList = ["uzair", "hassan", "amna", "aneeba"];
var dontCome = guestList[0];
console.log(dontCome, "nhe aa sakta");
guestList.splice(0, 1, "asad");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like dinner with me")); });
