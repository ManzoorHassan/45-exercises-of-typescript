function mySandwiches(...items:string []){
    return ` I want Sndwich of ${items}`;
};
let collection1 = mySandwiches("Ham", "cheeze", "lettuce")

let collection2 = mySandwiches("turkey", "swiss")

let collection3 = mySandwiches();

console.log(collection1);
console.log(collection2);
console.log(collection3);
