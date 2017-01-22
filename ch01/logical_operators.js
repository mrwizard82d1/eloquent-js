// JavaScript logical operators

cli = require("./cli.js");

cli.header("Logical Operators");

cli.label("Logical operators, '&&', '||' and '!', act on booleans");
cli.expr("true && false == false", true && false);
cli.expr("false || true == true", false || true);
cli.expr("! false == true", ! false);
cli.expr("! true == false", ! true);

cli.label("Precedence of logical and comparison operators minimize parentheses.")
console.log("|| < && || comparisons || others");
cli.expr("1 + 1 == 2 && 10 * 10 > 50", 1 + 1 == 2);

cli.label("The ternary (or conditional) operator is also(?) a logical operator.");
cli.expr("true ? 1 : 2 == 1", true ? 1 : 2);
cli.expr("false ? 1 : 2 == 2", false ? 1 : 2);