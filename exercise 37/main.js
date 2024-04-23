function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = " I love typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
make_shirt();
//calling a function now with nedium size and default message
make_shirt("Medium");
//colling a function now with small size and also different prient message
make_shirt("small", "i love javascript");
