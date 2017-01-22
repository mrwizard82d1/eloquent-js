// Functions for "CLI" (command line interface)

'use strict';

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

module.exports = {
    header,
    blankLine,
    label,
    expr
};