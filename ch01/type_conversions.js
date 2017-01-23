// JavaScript automatic type conversions

cli = require("./cli.js");

cli.header("Automatic Type Conversions");

cli.label("JavaScript type conversion rules may not be what you expect.");
cli.expr("8 * null", 8 * null);
cli.expr('"5" - 1', "5" - 1);
cli.expr('"5" + 1', "5" + 1);
cli.expr("false == 0", false == 0);

cli.label("Coercion to a number may result in NaN");
cli.expr('"five" - 1', "five" - 1);

cli.label("JavaScript uses complicated rules when comparing values using ==");
cli.expr("null == undefined", null == undefined);
cli.expr("null == 0", null == 0);

cli.label("Rules for comparison to false are well-defined")
cli.expr("0 == false", 0 == false);
cli.expr("NaN == false", NaN == false);
cli.expr("But... !NaN", !NaN);
cli.expr('"" == false', "" == false);

cli.label("All other values are `true`");
cli.expr("!!{}", !!{});
cli.expr("!!1", !!1);

cli.label("The operators `===` and `!==` perform **no** type coercions");
cli.expr("null === undefined", null === undefined);
cli.expr("null === 0", null === 0);
cli.expr("0 === false", 0 === false);

cli.label("But will perform promotions");
cli.expr("1.0 === 1", 1.0 === 1);