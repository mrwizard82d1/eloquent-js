// JavaScript boolean values

cli = require('./cli.js');

cli.header("booleans");

cli.label("Boolean literals are 'true' and 'false' (no quotes)");
cli.expr("true", true);
cli.expr("false", false);

cli.label("Comparisons produce booleans");
cli.expr("3 > 2", 3 > 2);
cli.expr("2 < 3", 2 < 3);
cli.expr("3 >= 3", 3 >= 3);
cli.expr("3 >= 3 + 1e-9", 3 >= 3 + 1e-9);
cli.expr("3 == 3", 3 == 3);
cli.expr(" 3 != 3", 3 != 3);

cli.label("One can compare strings, too");
cli.expr('"Aardvark" < "Zoroaster"', "Aardvark" < "Zoroaster");

cli.label("Strings compare lexicographically (using Unicode values)");
cli.expr('"itchy" > "itchY"', "itchy" > "itchY");
cli.expr('"scratch" < "scratches"', "scratch" < "scratches");

cli.label("One value is **not** equal to itself: NaN");
cli.expr("NaN == NaN", NaN == NaN);