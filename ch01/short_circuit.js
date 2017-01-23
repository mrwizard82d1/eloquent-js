// JavaScript logical operators short-circuit

cli = require("./cli.js");

cli.header("Short-circuit");

cli.label("Logical operators return either their right- or left-hand value");
console.log("`||` returns the left-hand value if **true**")
cli.expr('"Karl" || "user"', "Karl" || "user");
console.log("Otherwise, it returns the right-hand value");
cli.expr('null || "user"', null || "user");
console.log("This behavior leads to the idiom for default values");
var a = (null || 3);
console.log("var a = null || 3");
cli.expr("a", a);

cli.label("`&&` returns the left-hand value if **false**");
cli.expr("null && 3", null && 3);
console.log("Otherwise, it returns the right-hand value");
cli.expr("3 && null", 3 && null);

cli.label("Logical operators short-circuit their operands");
cli.expr('3 || console.log("Fire the missiles")', 3 || console.log(10 / 0));
cli.expr('undefined && console.log("Fire the missles)', undefined && console.log(10 / 0));

cli.label("The conditional (ternary) operator **also** short-circuits.");
cli.expr('true ? "abc" : console.log("Drop the bomb")', 
        true ? "abc" : console.log("Drop the bomb"));
cli.expr('false ? console.log("Drop the bomb") : "abc"', 
        false ? console.log("Drop the bomb") : "abc");