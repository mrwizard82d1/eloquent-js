// JavaScript special numbers

cli = require('./cli.js');

cli.header("Special Numbers");

cli.label("Very large and very small numbers");
cli.expr("Infinity", Infinity);
cli.expr("-Infinity", -Infinity);

cli.label("Don't try operating on (-)Infinity");
cli.expr("Infinity + 1", Infinity + 1);
cli.expr("-Infinity - 1", -Infinity - 1);

cli.label("'Not a number'");
cli.expr("0 / 0", 0 / 0);
cli.expr("Infinity - Infinity", Infinity - Infinity);
cli.expr("-Infinity + Infinity", -Infinity + Infinity);