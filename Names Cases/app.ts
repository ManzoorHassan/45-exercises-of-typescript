// lower case
let personName = "manzoor"
console.log("lower case:", personName.toLowerCase());

//upper case
console.log("uppercase:", personName.toLowerCase());

//title case
console.log("title case:", personName.replace(/\bw/g,c => c.toUpperCase()));