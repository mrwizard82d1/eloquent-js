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
(function testHeightsOfRows(){
	var rowHeightTests = [
		{ expr: 'rowHeights(emptyTestRows)', result: [ 0 ] },
		{ expr: 'rowHeights(singleTestRows)', result: [ 0, 7 ] },
		{ expr: 'rowHeights(manyTestRows)', result: [ 0, 7, 4 ] }
	];
	testExpressions(rowHeightTests);
})();

/*
 * Calculate the widths of each column in the `rows`.
 */
function cellWidths(rows) {
	return rows[0].map(function(_, colNdx) {
		// The width of the column at `colNdx` is the maximum of the cell widths of all rows in that column.
		return rows.reduce(function(max, row) {
			return Math.max(max, row[colNdx].minWidth());
		}, 0);
	});
};


