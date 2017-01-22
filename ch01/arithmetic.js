// JavaScript Arithmetic

function header(text) {
    console.log(text.toUpperCase());
}

function blankLine() {
    console.log("\n");
}

function label(text) {
    blankLine();
    console.log(text);
}

function expr(text, expr) {
    console.log(text);
    console.log(expr);
}

header("Arithmetic");

label("Operators ('+' and '*') with precedence");
expr("100 + 4 * 11", 100 + 4 * 11);

label("Parentheses have highest precedence")
expr("(100 + 4) * 11", (100 + 4) * 11);

label("Equal precedence operators evaluated left-to-right");
expr("1 - 2 + 1", 1 - 2 + 1);

label("The modulo (remainder) operator (%) is also available");
expr("314 % 100", 314 % 100);
expr("144 % 12", 144 % 12);