// JavaScript (literal) strings

cli = require('./cli.js');

cli.header("Strings");

cli.label("Delimited by single (') or double (\") quotes.");
cli.expr('"Patch my boat with chewing gum"', "Patch my boat with chewing gum");
cli.expr("'Monkeys wave goodbye'", 'Monkeys wave goodbye');

cli.label("'Special' characters can be escaped using a backslash(\\).");
cli.expr("For example, a newline (\\n)", "This is the first line\nAnd this is the second");

cli.label("How do I escape the escapes?");
cli.expr("'A newline character is written like \"\\n\".'", 
    "A newline character is written like \"\\n\".");

cli.label("Finally, strings support concatenation using '+'.");
cli.expr('"con" + "cat" + "e" + "nate"', "con" + "cat" + "e" + "nate");
