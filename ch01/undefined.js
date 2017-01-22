// JavaScript undefined values

cli = require('./cli.js');

cli.header("Undefined Values");

cli.label("JavaScript supports **two** undefined values.");
cli.expr("undefined", undefined);
cli.expr("null", null);

cli.label("The two undefined values are equal....");
cli.expr("undefined == null", undefined == null);

cli.label("But are not quite the same.");
cli.expr("typeof undefined", typeof undefined);
cli.expr("typeof null", typeof null)