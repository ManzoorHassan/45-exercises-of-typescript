let currentUsers = ["ali", "imtiaz","Hamza", "Usama", "uzair", "sajid"];

let newUsers = ["raza","aftab","mehtab","hamza", "usama"]


newUsers.forEach(newUser =>{
    let newUserLower = newUser.toLocaleLowerCase();

    let userNameTaken = currentUsers.some(currentUsers => currentUsers.toLocaleLowerCase() === newUser);
    //true or false

    if (userNameTaken){
        console.log(` ${newUser} needs to choose a new username because it's already taken`);
    }else {
        console.log(` ${newUser} is the new member added`);
        currentUsers.push(newUser)
    }
})
console.log("currentUsers");