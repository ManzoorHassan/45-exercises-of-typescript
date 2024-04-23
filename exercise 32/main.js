var currentUsers = ["ali", "imtiaz", "Hamza", "Usama", "uzair", "sajid"];
var newUsers = ["raza", "aftab", "mehtab", "hamza", "usama"];
newUsers.forEach(function (newUser) {
    var newUserLower = newUser.toLocaleLowerCase();
    var userNameTaken = currentUsers.some(function (currentUsers) { return currentUsers.toLocaleLowerCase() === newUser; });
    //true or false
    if (userNameTaken) {
        console.log(" ".concat(newUser, " needs to choose a new username because it's already taken"));
    }
    else {
        console.log(" ".concat(newUser, " is the new member added"));
        currentUsers.push(newUser);
    }
});
console.log("currentUsers");
