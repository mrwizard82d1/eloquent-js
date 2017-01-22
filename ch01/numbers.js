// JavaScript `number`s 

function header(text) {
    console.log(text.toUpperCase());
}

header("Numbers");

function blankLine() {
    console.log("\n");
}

function label(text) {
    blankLine();
    console.log(text);
}

label("Integers");
var anInt = 13;
console.log(anInt);

label("Floating point numbers");
var aFloat = 9.81;
console.log(aFloat);

label("Exponential notation");
var anExponential = 2.998e8;
console.log(anExponential);

function expr(text, expr) {
    console.log(text);
    console.log(expr);
}

label("Both integers and floating point values are JavaScript `number`s.");
expr("typeof(13)", typeof(anInt));
expr("typeof(9.81)", typeof(aFloat));
expr("typeof(2.998e8)", typeof(anExponential));
