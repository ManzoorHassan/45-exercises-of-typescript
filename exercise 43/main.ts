let magicianNames2 = ["ali", "hassan", "hussaun", "ahmed"];


let magicianNamesCopy = [...magicianNames2];

function show_magicians(great:string){
    let withGreatings = "";

    for(let item of magicianNamesCopy){
        withGreatings += `${great} ${item}/n`;
    }

return withGreatings; 
}

let myGreatings = show_magicians("hello");
let makeArray = myGreatings.split("/n");
console.log(makeArray);

console.log(magicianNames2);