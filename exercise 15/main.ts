let guestList = ["uzair", "hassan", "amna", "aneeba"];
let dontCome = guestList [0];
console.log(dontCome, "nhe aa sakta");
guestList.splice(0, 1, "asad");
guestList.forEach(guest => console.log(`salam ${guest}, would you like dinner with me`));