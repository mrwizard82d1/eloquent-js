// JavaScript unary operators

cli = require('./cli.js');

cli.header("Unary operators");

cli.label("Some are words");
cli.expr("typeof 4.5", typeof 4.5);
cli.expr("typeof 'x'", typeof "x");

cli.label("The minus ('-') and plus ('+') operators are also unary operators");
cli.expr("- (10 - 2)", - (10 - 2));
cli.expr("+ 10 + (10 - 2)", + 10 + (10 - 2));