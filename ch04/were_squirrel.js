function phi(table) {
	/*
	 * The argument `table` is an array of four values. The index of each item in the array in binary corresponds to 
	 * an element, n-sub-i-j of the forumla used to calculate correlation. (See 
	 * https://en.wikipedia.org/wiki/Phi_coefficient for information on this calculation.) 
	 * 
	 * For example, the first item has index 0. The value 0 in binary (two-digits) is `00`. Similarly, the second digit, at
	 * index 1, has a value of `01` expressed as a two-digit binary.
	 *
	 */

	return (table[3] * table[0] - table[2] * table[1]) / 
		Math.sqrt((table[2] + table[3]) * 
				  (table[0] + table[1]) * 
				  (table[1] + table[3]) *
				  (table[0] + table[2]));
};

function hasEvent(event, entry) {
	/*
	 * `entry` is a journal entry. A journal entry is an object with two fields: `events` and `squirrel`. (See
	 * file://jacques_journal.js  for details.)
	 * `event` is a specific event entered by Jacques in his journal. Examples are 'carrot', 'exercise' and 'weekend'.
	 */

	return entry.events.indexOf(event) != -1;
};

function tableFor(event, journal) {
	var table = [0, 0, 0, 0];
	for(var i = 0; i < journal.length; i++) {
		var entry = journal[i];
		var index = 0; // Assume we are updating the `00` item in `table`
		if (hasEvent(event, entry)) {
			index += 1; // The `event` actually occurred so increment either `01` or `11`
		};
		if (entry.squirrel) {
 			index += 2; // With these `events`, Jacques became a squirrel so increment either `10` or `11`
 		};

 		// Increment the appropriate item in the table.
 		table[index] += 1;
 	};

 	// Return the created table for `event` based on data in `journal`
 	return table;
};

/*
 * Store correlations for each event.
 */
function storePhi(event, phi) {
	map[event] = phi;
};

/*
 * Collect correlations for all `journal` entries.
 */
function gatherCorrelations(journal) {
	// Begin with an empty "map"
	var phis = {};
	
	// for each entry in `journal`
	for (var entryIndex = 0; entryIndex < journal.length; entryIndex++) {

		// Calculate the correlation coefficient for each event
		var events = journal[entryIndex].events;
		for (var i = 0; i < events.length; i++) {
			var event = events[i];
			// If `event` is **not** already in the correlation map
			if (!(event in phis)) {
				// Calculate its correlation. Note that `tableFor` will loop over `journal` again. The previous test prevents
				// us from calculating the correlation coefficient **every** time we encounter `event`.
				phis[event] = phi(tableFor(event, journal));
			};
		};
	};

	return phis;
};

// Print all the correlations in `jacques_journal.js`
var correlations = gatherCorrelations(JOURNAL);
for (var event in correlations) {
	console.log(event + ': ' + correlations[event]);
};

// Identify "stronger" correlations
for (var event in correlations) {
	var correlation = correlations[event];
	if (correlation > 0.1 || correlation < -0.1) {
		console.log(event + ': ' + correlations[event]);
	};
};

// The highest correlations are for events "brushed teeth" and "peanuts". Let's try analyzing correlations for these **pair**
// of events.
for (var i = 0; i < JOURNAL.length; i++) {
	var entry = JOURNAL[i];
	if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry)) {
		entry.events.push("peanut teeth");
	};
};
console.log(phi(tableFor('peanut teeth', JOURNAL)));

console.log('Eureka! A perfect correlation: eat peanuts but do not brush teeth.');
