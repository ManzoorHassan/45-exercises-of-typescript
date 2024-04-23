let userNames = ["mehdi", "basheer", "jameel", "admin", "yaseen"]

userNames = []

if(userNames.length === 0){
    console.log("be need to find some users!")
} 

else {
    // using forEach loop on array
    userNames.forEach(oneUser =>{
        if (oneUser=== "admin"){
    console.log(`hello ${oneUser}, would you like to see a status report`)
        }else{
        console.log(`hello ${oneUser}, thank you for logging in again`)
    }
    })
    
}