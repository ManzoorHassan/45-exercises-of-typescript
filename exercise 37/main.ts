function make_shirt(size:string = "large", printMessage:string = " I love typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`)
}
make_shirt();



//calling a function now with nedium size and default message
make_shirt("Medium")

//colling a function now with small size and also different prient message
make_shirt("small", "i love javascript")