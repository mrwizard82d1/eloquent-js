/*
 * Calculate the height of a single row.
 */
function heightOfRow(row) {
	// The height of a row is the maximum of all the minimum heights.
	return row.reduce(function(soFar, cell) {
		return Math.max(soFar, cell.minHeight());
	}, 0);
}

// I need to figure out how to remove these details from the global name space!
var emptyTestRow = [];
var singleTestRow = [{minHeight: function() { return 7; }}];
var manyTestRow = [{minHeight: function() { return 3; }}, 
	{minHeight: function() { return 1; }}, {minHeight: function() { return 4; }}];

(function testHeightsOfRows(){
	var rowHeightTests = [
		{ expr: 'heightOfRow(emptyTestRow)', result: 0 },
		{ expr: 'heightOfRow(singleTestRow)', result: 7 },
		{ expr: 'heightOfRow(manyTestRow)', result: 4 }
	];
	return testExpressions(rowHeightTests);
})();

/*
 * Calculate the heights of all rows.
 */
function rowHeights(rows) {
	return rows.map(heightOfRow);
};

// Ditto!
var emptyTestRows = [emptyTestRow];
var singleTestRows = [emptyTestRow, singleTestRow];
var manyTestRows = [emptyTestRow, singleTestRow, manyTestRow];
(function testHeightsOfRows() {
	var rowHeightTests = [
		{ expr: 'rowHeights(emptyTestRows)', result: [ 0 ] },
		{ expr: 'rowHeights(singleTestRows)', result: [ 0, 7 ] },
		{ expr: 'rowHeights(manyTestRows)', result: [ 0, 7, 4 ] }
	];
	testExpressions(rowHeightTests);
})();

/*
 * Maximum width in column indexed by `cellNdx` within `rows`.
 */
function widthOfCellsInColumn(rows, colNdx) {
	return rows.reduce(function(cellWidthSoFar, row) {
		return Math.max(cellWidthSoFar, row[colNdx].minWidth());
	}, 0);
}

var singleColumnRow = [ { minWidth: function() { return 2; } } ];
var singleColumnRows = [ singleColumnRow ];
var manyColumnRow = [ { minWidth: function() { return 7; } },
	{ minWidth: function() { return 1; } },
	{ minWidth: function() { return 8; } } ];
var manyColumnRows = [ manyColumnRow ];
var manyColumnRow1 = [ { minWidth: function() { return 1; } },
	{ minWidth: function() { return 4; } },
	{ minWidth: function() { return 1; } } ];
var manyColumnRow2 = [ { minWidth: function() { return 3; } },
	{ minWidth: function() { return 1; } },
	{ minWidth: function() { return 4; } } ];
var manyColumnRow3 = [ { minWidth: function() { return 2; } },
	{ minWidth: function() { return 7; } },
	{ minWidth: function() { return 1; } } ];
var manyRowsManyColumns = [ manyColumnRow1, manyColumnRow2, manyColumnRow3 ];
(function testWidthsOfCells() {
	var cellWidthTests = [
		{ expr: 'widthOfCellsInColumn(singleColumnRows, 0)', result: 2 },
		{ expr: 'widthOfCellsInColumn(manyColumnRows, 0)', result: 7 },
		{ expr: 'widthOfCellsInColumn(manyColumnRows, 1)', result: 1 },
		{ expr: 'widthOfCellsInColumn(manyColumnRows, 2)', result: 8 },
		{ expr: 'widthOfCellsInColumn(manyRowsManyColumns, 0)', result: 3 },
		{ expr: 'widthOfCellsInColumn(manyRowsManyColumns, 1)', result: 7 },
		{ expr: 'widthOfCellsInColumn(manyRowsManyColumns, 2)', result: 4 }
  	];
	testExpressions(cellWidthTests);
})();

/*
 * Calculate the widths of each column in the `rows`.
 */
function columnWidths(rows) {
		return rows[0].map(function(_, colNdx) { return widthOfCellsInColumn(rows, colNdx);
	});
}

/**
 * Draw a table.
 */
function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = columnWidths(rows);

	var drawLine = function(blocks, lineNo) {
		return blocks.map(function(block) {
			return block[lineNo];
		}).join(' ');
	};

	var drawRow = function(row, rowNumber) {
		var blocks = row.map(function(cell, columnNumber) {
			return cell.draw(widths[columnNumber], heights[rowNumber]);
		});

		return blocks[0].map(function(_, lineNumber) {
			return drawLine(blocks, lineNumber);
		}).join('\n');
	};

	return rows.map(drawRow).join('\n');
}

/*
 * Repeat the string, `str`, `count` times.
 */
function repeat(str, count) {
	var result = '';
	for (var i = 0; i < count; i++) {
		result += str;
	};
	return result;
}

/*
 * A cell consisting only of text.
 */
function TextCell(text) {
	this.text = text.split('\n');
}

/*
 * The minimum width of a `TextCell`.
 */
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) {
		return Math.max(width, line.length);
	}, 0);
}

/*
 * The minimum height of a `TextCell`.
 */
TextCell.prototype.minHeight = function() {
	return this.text.length;
}

/*
 * Draws a `TextCell`.
 */
TextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || '';
		result.push(line + repeat(' ', width - line.length));
	};
	return result;
}

var rows = [];
for (var i = 0; i < 5; i++) {
	var row = [];
	for (var j = 0; j < 5; j++) {
		if ((j + i) % 2 == 0) {
			row.push(new TextCell('##'));
		}
		else {
			row.push(new TextCell('  '));
		}
	}
	rows.push(row);
}
console.log(drawTable(rows));
