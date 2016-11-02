var expect = require('chai').expect;
var MyHigher = require('../src/my_higher');

var filterTests = [
	{ expr: 'filter([2, 3, 5, 7], function(i) { return (i % 2 != 0); })', result: [3, 5, 7] },
	{ expr: 'filter([2, 3, 5, 7], function(i) { return (i % 2 != 0); })', result: [3, 5, 7] },
];

describe('my higher tests', function() {
	it('should pass the canary test', function() {
		expect(true).to.be.true;
	});
});

describe('my filter tests', function() {
	var myHigher;
	beforeEach(function() {
		myHigher = new MyHigher();
	});

	var noPassFilterTest = function(_) { return false; };
	var passThroughTest = function(_) { return true; };

	it('should return an empty array when given an empty array independent of test', function() {
		var anEmptyArray = [];

		var actual = myHigher.filter(anEmptyArray, noPassFilterTest);

		expect(actual).to.be.empty;
	});

	describe('when given a single item array', function() {
		var singleItemArray = [2];
		
		it('should return a single item array when item passes test', function() {
			var actual = myHigher.filter(singleItemArray, passThroughTest);

			expect(actual).to.eql([2]);
		});

		it('should return an empty array when item passes test', function() {
			var actual = myHigher.filter(singleItemArray, noPassFilterTest);

			expect(actual).to.be.empty;
		});
	});

	describe('when given a many item array', function() {
		var manyItemArray = [2, 3, 5, 7];

		it('should return an empty array when test passes no items', function() {
			var actual = myHigher.filter(manyItemArray, noPassFilterTest);

			expect(actual).to.be.empty;
		});

		it('should return the array when test passes all items', function() {
			var actual = myHigher.filter(manyItemArray, passThroughTest);

			expect(actual).to.eql(manyItemArray);
		});

		it('should return only passed items when test passes some items', function() {
			var twoItemFilter = function(item) { return item == 3 || item == 7; }

			var actual = myHigher.filter(manyItemArray, twoItemFilter);

			expect(actual).to.eql([3, 7]);
		});
	});
});
