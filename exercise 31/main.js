var userNames = ["mehdi", "basheer", "jameel", "admin", "yaseen"];
userNames = [];
if (userNames.length === 0) {
    console.log("be need to find some users!");
}
else {
    // using forEach loop on array
    userNames.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("hello ".concat(oneUser, ", would you like to see a status report"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again"));
        }
    });
}
