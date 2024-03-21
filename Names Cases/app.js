// lower case
var personName = "Manzoor";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toLowerCase());
//Title case
console.log("title case:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
